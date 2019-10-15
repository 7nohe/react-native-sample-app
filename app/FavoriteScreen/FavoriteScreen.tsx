import React, { useContext } from "react";
import Layout from "../Layout";
import CardList from "../HomeScreen/CardList";
import { FavoriteContext } from "./FavoriteContext";

const FavoriteScreen = () => {
  const { favorites } = useContext(FavoriteContext);
  return (
    <Layout>
      <CardList photos={favorites} />
    </Layout>
  );
};

export default FavoriteScreen;
