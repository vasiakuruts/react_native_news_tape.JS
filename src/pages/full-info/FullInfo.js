import React from "react";
import { Text, View } from "react-native";
import { gStyle } from "../../components/g-styles/style";

const FullInfoPage = ({ route }) => {
  return (
    <View style={gStyle.main}>
      <Text style={gStyle.title}>{route.params.name}</Text>
      <Text style={gStyle.title}>{route.params.anons}</Text>
      <Text>{route.params.full}</Text>
    </View>
  );
};

export default FullInfoPage;
