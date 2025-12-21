import { View, Text } from "react-native";
import React, { useState } from "react";
import { CameraType, useCameraPermissions } from "expo-camera";

type Props = {};

const CameraScreen = (props: Props) => {
  const [facing, setFacing] = useState<CameraType>("back");
  const [permission, requestPermission] = useCameraPermissions();

  return (
    <View>
      <Text>camera</Text>
    </View>
  );
};

export default CameraScreen;
