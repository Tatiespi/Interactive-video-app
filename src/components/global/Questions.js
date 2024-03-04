// QuestionWithAnswers.js
import React, { useState } from "react";
import { View, Text, TouchableHighlight } from "react-native";
import { styles } from "./Style";

const QuestionWithAnswers = () => {
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [visible, setVisible] = useState(true);

  const options = [
    {
      id: "1",
      choiceLetter: "A",
      text: "REDUCIR LA HUELLA DE CARBONO AL EVITAR EL USO DE VEHÍCULOS MOTORIZADOS",
    },
    {
      id: "2",
      choiceLetter: "B",
      text: "AUMENTAR LA CONGESTIÓN VEHICULAR EN LAS CALLES",
    },
    {
      id: "3",
      choiceLetter: "C",
      text: "CONTRIBUIR AL CALENTAMIENTO GLOBAL AL EMITIR MENOS GASES DE EFECTO INVERNADERO",
    },
  ];

  const handleAnswerSelection = (option) => {
    if (!selectedAnswer) {
      setSelectedAnswer(option);
      setVisible(false);
    }
  };

  const renderResultText = () => {
    if (selectedAnswer) {
      return (
        <Text style={styles.questionsStyles.resultText}>
          ¡Seleccionaste la opción {selectedAnswer.choiceLetter}! {"\n"}
          {selectedAnswer.text}
        </Text>
      );
    }
    return null;
  };

  return (
    <View style={styles.questionsStyles.container}>
      {visible && (
        <>
          <View style={styles.questionsStyles.questionContainer}>
            <Text style={styles.questionsStyles.questionText}>
              ¿CUÁL ES UNO DE LOS PRINCIPALES BENEFICIOS DE ANDAR EN BICICLETA?
            </Text>
          </View>

          <View style={styles.questionsStyles.answersContainer}>
            {options.map((option) => (
              <View key={option.id}>
                <TouchableHighlight
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
                    <Text style={styles.questionsStyles.optionText} numberOfLines={3}>
                      {option.text}
                    </Text>
                  </>
                </TouchableHighlight>
              </View>
            ))}
          </View>
        </>
      )}

      {!visible && renderResultText()}
    </View>
  );
};

export default QuestionWithAnswers;
