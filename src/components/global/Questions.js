import React, { useState } from "react";
import { View, Text, TouchableHighlight } from "react-native";
import { styles } from "./Style";
import activitiesJson from '../../json/activities.json'

const QuestionWithAnswers = ({
  onAnswerChange,
  onFeedbackChange,
  showActivity,
  onChangeVideo,
}) => {
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [visible, setVisible] = useState(true);

  // Eliminar redundancias de nombres en questions.
  // Considerar agregar una propiedad a cada pregunta que defina cuál es la respuesta correcta, para facilitar el control del flujo.
  // Tener en cuenta que para la selección por iconos hay que usar enlaces o recursos locales
  let indexToShow = 0;
  const activities = activitiesJson;
  const handleAnswerSelection = (option) => {
    if (!selectedAnswer) {
      setSelectedAnswer(option);
      setVisible(false);
    }

    if (option.letter == "A") {
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
  //         ¡Seleccionaste la opción {selectedAnswer.letter}! {"\n"}
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
              {activities[indexToShow].text}
            </Text>
          </View>

          <View style={styles.questionsStyles.answersContainer}>
            {activities[indexToShow].options.map((option) => (
              <View key={option.id}>
                <TouchableHighlight
                  testID={`button${option.letter}`}
                  onPress={() => handleAnswerSelection(option)}
                  underlayColor={option.letter === "A" ? "green" : "red"}
                  style={[
                    styles.questionsStyles.option,
                    selectedAnswer === option &&
                      (option.letter === "A"
                        ? styles.questionsStyles.optionCorrect
                        : styles.questionsStyles.optionIncorrect),
                  ]}
                >
                  <>
                    <View style={styles.questionsStyles.optionLetterContainer}>
                      <Text style={styles.questionsStyles.optionLetter}>
                        {option.letter}
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
