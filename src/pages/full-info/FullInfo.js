import React from "react";
import { Text, View, Image } from "react-native";
import { gStyle } from "../../components/g-styles/style";

const FullInfoPage = ({ route }) => {
  console.log("====================================");
  console.log(route.params);
  console.log("====================================");
  if (route.params === undefined) {
    return <Text style={gStyle.title}>Not data</Text>;
  } else {
    return (
      <View style={gStyle.main}>
        <Image
          source={{ uri: route.params.img }}
          style={{
            width: "100%",
            height: 400,
          }}
        />
        <Text style={gStyle.title}>{route.params.name}</Text>
        <Text style={gStyle.title}>{route.params.anons}</Text>
        <Text>{route.params.full}</Text>
      </View>
    );
  }
};

export default FullInfoPage;
