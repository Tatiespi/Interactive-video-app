import { SafeAreaView, View, StyleSheet, Dimensions } from "react-native";
import Navbar from "./src/components/global/Navbar";
import Home from "./src/components/global/Home";

export default function App() {
  return (
    <View style={styles.container}>
      <Navbar />
      <Home/>
    </View>
  );
}

// Consider using users phone dimensions.
const { width, height } = Dimensions.get("screen");

const styles = StyleSheet.create({
  container: {
    paddingVertical: height / 22
  },
});