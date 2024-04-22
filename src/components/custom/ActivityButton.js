import React, { useState } from "react";
import { View, Text, TouchableHighlight, Image } from "react-native";
import { styles } from "../global/Style";
import buttonImage from "../../../assets/bombilla-volteada-encendida.png";

const ActivityButton = ({ text }) => {
  const handleButtonPress = (text) => {
    console.log(text);
  };

  return (
    <View style={styles.buttonStyles.container}>
      <TouchableHighlight
        onPress={() => handleButtonPress(text)}
        underlayColor='green'
        style={styles.buttonStyles.buttonContent}
      >
        <Image
          source={buttonImage}
          style={styles.buttonStyles.buttonImage}
        ></Image>
      </TouchableHighlight>
    </View>
  );
};

export default ActivityButton;
