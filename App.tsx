import React, { useState, useEffect } from "react";
import { AppLoading } from "expo";
import * as Font from "expo-font";
import { Ionicons } from "@expo/vector-icons";
import HomeScreen from "./app/HomeScreen/index";

const App = () => {
  const [isReady, setIsReady] = useState(false);
  useEffect(() => {
    const loadFont = async () => {
      await Font.loadAsync({
        Roboto: require("native-base/Fonts/Roboto.ttf"),
        Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
        ...Ionicons.font
      });
      setIsReady(true);
    };
    loadFont();
  }, []);

  if (!isReady) {
    return <AppLoading />;
  }

  return <HomeScreen />;
};

export default App;
