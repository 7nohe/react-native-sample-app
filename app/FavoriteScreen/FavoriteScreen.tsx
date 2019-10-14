import React from "react";
import { Text, View } from "react-native";
import Layout from "../Layout";

const FavoriteScreen = () => {
  return (
    <Layout>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Favorite!</Text>
      </View>
    </Layout>
  );
};

export default FavoriteScreen;
