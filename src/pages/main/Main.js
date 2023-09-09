import React, { useState } from "react";
import { Text, View, Button, FlatList, TouchableOpacity } from "react-native";
import { gStyle } from "../../components/g-styles/style";

const MainPage = ({ navigation }) => {
  const loadScene = () => {
    navigation.navigate("Contact");
  };

  const [news, setNews] = useState([
    { id: 1, name: "Google", anons: "Google!!!", full: "Google is coll!" },
    { id: 2, name: "Apple", anons: "Apple!!!", full: "Apple is coll!" },
    {
      id: 3,
      name: "FaceBook",
      anons: "FaceBook!!!",
      full: "FaceBook is coll!",
    },
  ]);
  return (
    <View style={gStyle.main}>
      <Text style={gStyle.title}>Голова сторінка</Text>
      <Button title="Завантажити сторінки" onPress={loadScene} />
      <FlatList
        data={news}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("FullInfo", item)}
          >
            <Text>{item.name}</Text>
            <Text>{item.anons}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default MainPage;
