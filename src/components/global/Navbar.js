import { StyleSheet, Text, View, Image } from "react-native";
import logo from "../../../assets/earthguard-logo.png";

export default function Navbar() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>EarthGuard</Text>
      <Image style={styles.tinyLogo} source={logo} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#84bf04",
    paddingVertical: 18,
  },

  text: {
    color: "#400D01",
    fontWeight: "700",
  },

  tinyLogo: {
    width: 30,
    height: 30,
    marginLeft: 10,
  },
});
