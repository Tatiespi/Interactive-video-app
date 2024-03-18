import React, { useState } from "react";
import { View, Text, TouchableHighlight } from "react-native";
import { styles } from "./Style";

const QuestionWithAnswers = ({
  onAnswerChange,
  onFeedbackChange,
  showActivity,
  onChangeVideo
}) => {
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [visible, setVisible] = useState(true);

  const options = [
    {
      id: "1",
      choiceLetter: "A",
      text: "Reducir el uso de agua potable en el riego de plantas.",
    },
    {
      id: "2",
      choiceLetter: "B",
      text: "Aumentar la cantidad de agua en los tanques de almacenamiento.",
    },
    {
      id: "3",
      choiceLetter: "C",
      text: "Evitar la formación de charcos en el suelo.",
    },
  ];

  const handleAnswerSelection = (option) => {
    if (!selectedAnswer) {
      setSelectedAnswer(option);
      setVisible(false);
    }

    if (option.choiceLetter == "A") {
      onAnswerChange(true);
      onFeedbackChange(true);
      onChangeVideo(1);
    } else {
      onAnswerChange(false);
      onFeedbackChange(true);
    }
  };

  // const renderResultText = () => {
  //   if (selectedAnswer) {
  //     return (
  //       <Text style={styles.questionsStyles.resultText}>
  //         ¡Seleccionaste la opción {selectedAnswer.choiceLetter}! {"\n"}
  //         {selectedAnswer.text}
  //       </Text>
  //     );
  //   }
  //   return null;
  // };

  return (
    <View
      style={[
        styles.questionsStyles.container,
        showActivity ? null : { display: "none" },
      ]}
    >
      {visible && (
        <>
          <View style={styles.questionsStyles.questionContainer}>
            <Text style={styles.questionsStyles.questionText}>
              ¿Cuál es el propósito principal de recolectar agua de lluvia para
              riego?
            </Text>
          </View>

          <View style={styles.questionsStyles.answersContainer}>
            {options.map((option) => (
              <View key={option.id}>
                <TouchableHighlight
                  testID={`button${option.choiceLetter}`}
                  onPress={() => handleAnswerSelection(option)}
                  underlayColor={option.choiceLetter === "A" ? "green" : "red"}
                  style={[
                    styles.questionsStyles.option,
                    selectedAnswer === option &&
                      (option.choiceLetter === "A"
                        ? styles.questionsStyles.optionCorrect
                        : styles.questionsStyles.optionIncorrect),
                  ]}
                >
                  <>
                    <View style={styles.questionsStyles.optionLetterContainer}>
                      <Text style={styles.questionsStyles.optionLetter}>
                        {option.choiceLetter}
                      </Text>
                    </View>
                    <Text
                      style={styles.questionsStyles.optionText}
                      numberOfLines={3}
                    >
                      {option.text}
                    </Text>
                  </>
                </TouchableHighlight>
              </View>
            ))}
          </View>
        </>
      )}

      {/* {!visible && renderResultText()} */}
    </View>
  );
};

export default QuestionWithAnswers;
