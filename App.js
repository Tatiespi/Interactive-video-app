import { StatusBar } from "expo-status-bar";
import { View, StyleSheet } from "react-native";
import Navbar from "./src/components/global/Navbar";
import HelloWorld from "./src/components/custom/HelloWorld";
import DragDrop from "./src/components/custom/Drag&Drop";

export default function App() {
  return (
    <View>
      <Navbar />
      {/* <HelloWorld /> */}
      <DragDrop/>
      <StatusBar/>
    </View>
  );
}