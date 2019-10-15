import React, { useState, useEffect } from "react";
import { AppLoading } from "expo";
import * as Font from "expo-font";
import { Ionicons } from "@expo/vector-icons";
import HomeScreen from "./app/HomeScreen/index";
import { FavoriteContext } from "./app/FavoriteScreen/FavoriteContext";

const App = () => {
  const [isReady, setIsReady] = useState(false);
  const [favorites, setFavorites] = useState([]);
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

  return (
    <FavoriteContext.Provider value={{ favorites, setFavorites }}>
      <HomeScreen />
    </FavoriteContext.Provider>
  );
};

export default App;
