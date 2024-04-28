import React, { useState } from "react";
import { View, TouchableHighlight, Image } from "react-native";
import { styles } from "../global/Style";
import buttonImage from "../../../assets/bombilla-volteada-encendida.png";
import ButtonInfo from "./ButtonInfo";

const ActivityButton = () => {
  const text = 'Información a mostrar'
  const [showInfo, setShowInfo] = useState(false);
  const handleButtonPress = () => {
    setShowInfo(!showInfo);
  };

  return (
    <View style={styles.buttonStyles.container}>
      <TouchableHighlight
        onPress={() => handleButtonPress()}
        underlayColor='green'
        style={styles.buttonStyles.buttonContent}
      >
        <Image
          source={buttonImage}
          style={styles.buttonStyles.buttonImage}
        ></Image>
      </TouchableHighlight>

      {showInfo && <ButtonInfo textToShow={text} />}
    </View>
  );
};

export default ActivityButton;
