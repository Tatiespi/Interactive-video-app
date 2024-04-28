import { View, Text } from "react-native";
import { styles } from "../global/Style";

const ButtonInfo = ({ textToShow }) => {
  return (
    <View style={styles.buttonStyles.buttonInfo}>
      <Text>{textToShow}</Text>
    </View>
  );
};

export default ButtonInfo;
