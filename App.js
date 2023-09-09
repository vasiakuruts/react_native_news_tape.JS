import {
  StyleSheet,
  ImageBackground,
  View,
  Platform,
  StatusBar,
  SafeAreaView,
} from "react-native";
import Navigate from "./src/components/navigate/Navigate";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useCallback } from "react";

SplashScreen.preventAutoHideAsync();

const image = {
  uri: "https://abrakadabra.fun/uploads/posts/2022-01/1642919410_4-abrakadabra-fun-p-odnotonnie-oboi-dlya-telefona-android-7.jpg",
};

const App = () => {
  const [fontsLoaded, fontError] = useFonts({
    "mt-bold": require("./assets/fonts/Montserrat-Bold.ttf"),
    "mt-light": require("./assets/fonts/Montserrat-Light.ttf"),
  });
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }
  return (
    <SafeAreaView style={styles.AndroidSafeArea}>
      <View style={styles.container} onLayout={onLayoutRootView}>
        <ImageBackground source={image} resizeMode="cover" style={styles.image}>
          <Navigate />
        </ImageBackground>
      </View>
    </SafeAreaView>
  );
};
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "mt-light",
  },
  image: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
  },
  AndroidSafeArea: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
