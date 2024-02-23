import { StyleSheet, Text, View } from "react-native";

export default function Navbar() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Item 1</Text>
      <Text style={styles.text}>Item 2</Text>
      <Text style={styles.text}>Item 3</Text>
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
    marginTop: 40
  },

  text: {
    color: "#FFFFFF",
  },
});
