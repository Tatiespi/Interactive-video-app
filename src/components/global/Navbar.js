import { StyleSheet, Text, View } from "react-native";

export default function Navbar() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Video Interactivo App</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    backgroundColor: "#1B3C73",
    paddingVertical: 18,
  },

  text: {
    color: "#FFFFFF",
  },
});
