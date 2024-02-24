import { SafeAreaView, View, StyleSheet, Dimensions } from "react-native";
import Navbar from "./src/components/global/Navbar";
import HelloWorld from "./src/components/custom/HelloWorld";
import Home from "./src/components/global/Home";

export default function App() {
  return (
    <View style={styles.container}>
      <Navbar />
      {/* <HelloWorld /> */}
      <Home/>
    </View>
  );
}

// Consider using users phone dimensions.
const { width, height } = Dimensions.get("screen");

const styles = StyleSheet.create({
  container: {
    paddingVertical: 42
  },
});