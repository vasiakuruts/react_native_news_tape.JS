import React from "react";
import { Text, View, Image } from "react-native";
import { gStyle } from "../../components/g-styles/style";
import styles from "./styles";

const FullInfoPage = ({ route }) => {
  if (route.params === undefined) {
    return <Text style={gStyle.title}>Not data</Text>;
  } else {
    return (
      <View style={gStyle.main}>
        <Image source={{ uri: route.params.img }} style={styles.image} />
        <Text style={[gStyle.title, styles.title]}>{route.params.name}</Text>
        <Text style={[gStyle.title, styles.anons]}>{route.params.anons}</Text>
        <Text style={[gStyle.title, styles.anons]}>{route.params.full}</Text>
      </View>
    );
  }
};

export default FullInfoPage;
