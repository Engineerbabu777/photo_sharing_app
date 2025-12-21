import { View, Text } from "react-native";
import React from "react";
import { Redirect } from "expo-router";

type Props = {};

const App = (props: Props) => {
  return <Redirect href={"/events/[id]/camera"} />;
};

export default App;
