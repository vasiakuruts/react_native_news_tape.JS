import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { gStyle } from "./src/components/g-styles/style";
import * as font from "expo-font";
import AppLoading from "expo-app-loading";

 const fonts = () =>
  font.loadAsync({
    "mt-bold": require("./assets/fonts/Montserrat-Bold.ttf"),
    "mt-light": require("./assets/fonts/Montserrat-Light.ttf"),
  });
 const App  = () => {
  const [font, setFont] = useState(false);
  if (font) {
    return (
      <View style={gStyle.main}>
        <Text style={gStyle.title}>Hello World!</Text>
      </View>
    );
  } else {
    return (
      <AppLoading
        startAsync={fonts}
        onFinish={() => setFont(true)}
        onError={console.warn}
      />
    );
  }
}
export default App

