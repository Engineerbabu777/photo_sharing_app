import {
  View,
  Text,
  ActivityIndicator,
  Button,
  StyleSheet,
  Pressable,
  StatusBar,
} from "react-native";
import React, { useRef, useState } from "react";
import { CameraType, CameraView, useCameraPermissions } from "expo-camera";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { uploadToCloudinary } from "@/lib/cloudinary";

type Props = {};

const CameraScreen = (props: Props) => {
  const [facing, setFacing] = useState<CameraType>("back");
  const [permission, requestPermission] = useCameraPermissions();

  const camera = useRef<CameraView>(null);

  if (!permission) {
    return <ActivityIndicator />;
  }

  if (!permission.granted) {
    return (
      <View style={styles.container}>
        <Text style={styles.message}>
          We need your permission to show the camera
        </Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    );
  }

  function toggleCameraFacing() {
    setFacing((current) => (current === "back" ? "front" : "back"));
  }

  async function takePhoto() {
    const photo = await camera.current?.takePictureAsync();
    if (!photo?.uri) return;

    const cloudinaryResponse = await uploadToCloudinary(photo.uri);
    console.log(JSON.stringify(cloudinaryResponse, null, 2));
  }

  return (
    <View style={styles.container}>
      <StatusBar barStyle={"light-content"} />
      <CameraView ref={camera} style={styles.camera} facing={facing}>
        <View className="absolute bottom-0 bg-neutral-900/20 w-full p-4">
          <Ionicons
            name="camera-reverse"
            size={24}
            color="white"
            onPress={toggleCameraFacing}
          />
        </View>
      </CameraView>

      <SafeAreaView
        edges={["bottom"]}
        className="flex-row bg-transparent w-full p-4 justify-center items-center"
      >
        <Pressable
          onPress={takePhoto}
          className="bg-white rounded-full w-20 h-20"
        />
      </SafeAreaView>
    </View>
  );
};

export default CameraScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  message: {
    textAlign: "center",
    paddingBottom: 10,
  },
  camera: {
    flex: 1,
    backgroundColor: "red",
  },

  button: {
    flex: 1,
    alignItems: "center",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
  },
});
