import { View, Text, ActivityIndicator } from "react-native";
import React, { useRef, useState } from "react";
import { CameraType, CameraView, useCameraPermissions } from "expo-camera";

type Props = {};

const CameraScreen = (props: Props) => {
  const [facing, setFacing] = useState<CameraType>("back");
  const [permission, requestPermission] = useCameraPermissions();

  const camera = useRef<CameraView>(null);

  if (!permission) {
    return <ActivityIndicator />;
  }

  return (
    <View>
      <Text>camera</Text>
    </View>
  );
};

export default CameraScreen;
