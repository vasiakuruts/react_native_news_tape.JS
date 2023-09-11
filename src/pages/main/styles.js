import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
  headers: {
    marginBottom: 25,
  },
  item: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    marginBottom: 25,

    borderWidth: 1,
    borderStyle: "solid",
  },
  title: {
    fontFamily: "mt-bold",
    fontSize: 22,
    textAlign: "center",
    marginTop: 20,
    color: "#474747",
  },
  anons: {
    fontFamily: "mt-light",
    fontSize: 26,
    textAlign: "center",
    marginTop: 5,
    color: "#474747",
  },
  image: {
    width: 100,
    height: 100,
  },
  iconAdd: {
    textAlign: "center",
    marginBottom: 15,
  },
  iconClose: {
    textAlign: "center",
  },
});
