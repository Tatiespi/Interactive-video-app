import React from "react";
import { View, Text, Button, Image, TouchableOpacity } from "react-native";
import { styles } from "./Style";
import sadFace from "../../../assets/sad-face.png";
import happyFace from "../../../assets/happy-face.png";
import nextQuestion from "../../../assets/next-question.png";

export default function Feedback({
  textToShow,
  isRightAnswer,
  onRetryGame,
  onNextQuestion,
}) {
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
        style={
          isRightAnswer
            ? styles.feedbackStyles.nextButtonWrapper
            : styles.feedbackStyles.retryButtonWrapper
        }
      >
        {isRightAnswer ? (
          <TouchableOpacity onPress={onNextQuestion}>
            <Image style={styles.feedbackStyles.image} source={nextQuestion} />
          </TouchableOpacity>
        ) : (
          <Button
            title='Volver a Intentar'
            color='#212121'
            onPress={onRetryGame}
          ></Button>
        )}
      </View>
    </View>
  );
}
