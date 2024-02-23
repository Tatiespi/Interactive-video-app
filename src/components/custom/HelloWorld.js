import { StyleSheet, Text, View, Image } from "react-native";

export default function HelloWorld() {
  return (
    <View style={styles.container}>
      <Text>
        ¡Hola Devs! Usen el archivo App.js para empezar a trabajar en la app 👾
      </Text>
      <Image source={require("../../../assets/favicon.png")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: 25,
  }
});
