import React, { useState } from "react";
import {
  Text,
  View,
  Button,
  FlatList,
  TouchableOpacity,
  Image,
} from "react-native";
import { gStyle } from "../../components/g-styles/style";
import styles from "./styles";
import temporaryNews from "../../temporary";

const MainPage = ({ navigation }) => {
  const loadScene = () => {
    navigation.navigate("Contact");
  };

  const [news, setNews] = useState(temporaryNews);
  return (
    <View style={gStyle.main}>
      <Text style={[gStyle.title, styles.headers]}>Голова сторінка</Text>
      <FlatList
        data={news}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.item}
            onPress={() => navigation.navigate("FullInfo", item)}
          >
            <Image
              source={{ uri: item.img }}
              style={{
                width: 100,
                height: 100,
              }}
            />
            <Text style={styles.title}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default MainPage;
