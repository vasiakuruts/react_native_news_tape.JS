import React, { useState } from "react";
import {
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Image,
  Modal,
} from "react-native";
import { gStyle } from "../../components/g-styles/style";
import styles from "./styles";
import temporaryNews from "../../temporary";
import { Ionicons } from "@expo/vector-icons";

const MainPage = ({ navigation }) => {
  const loadScene = () => {
    navigation.navigate("Contact");
  };

  const [news, setNews] = useState(temporaryNews);
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={gStyle.main}>
      <Modal visible={modalVisible}>
        <View style={gStyle.main}>
          <Ionicons
            name="close-circle"
            size={30}
            color="red"
            onPress={() => setModalVisible(false)}
            style={styles.iconClose}
          />
          <Text style={styles.title}>Форма для додаваннка новини</Text>
        </View>
      </Modal>
      <Ionicons
        name="add-circle"
        size={30}
        color="green"
        onPress={() => setModalVisible(true)}
        style={styles.iconAdd}
      />
      <Text style={[gStyle.title, styles.headers]}>Голова сторінка</Text>
      <FlatList
        data={news}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.item}
            onPress={() => navigation.navigate("FullInfo", item)}
          >
            <Image source={{ uri: item.img }} style={styles.image} />
            <Text style={styles.title}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default MainPage;
