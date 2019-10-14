import React from "react";
import { Text, View } from "react-native";
import Layout from "../Layout";

const CameraScreen = () => {
  return (
    <Layout>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Camera!</Text>
      </View>
    </Layout>
  );
};

export default CameraScreen;
