import React, { useState, useEffect } from "react";
import { View, Text, Button, Image } from "react-native";
import { styles } from "./Style";
import sadFace from "../../../assets/sad-face.png";
import happyFace from "../../../assets/happy-face.png";

export default function Feedback({ textToShow, isRightAnswer, onRetryGame }) {
  return (
    <View>
      <View style={styles.feedbackStyles.container}>
        <Image
          style={styles.feedbackStyles.image}
          source={isRightAnswer ? happyFace : sadFace}
        />
        <Text style={styles.feedbackStyles.text}>{textToShow}</Text>
      </View>
      <View
        style={[
          styles.feedbackStyles.buttonWrapper,
          { display: isRightAnswer ? "none" : "flex" },
        ]}
      >
        <Button title="Volver a Intentar" color="#212121" onPress={onRetryGame}></Button>
      </View>
    </View>
  );
}
