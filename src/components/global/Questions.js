import React, { useState } from "react";
import { View, Text, TouchableHighlight } from "react-native";
import { styles } from "./Style";

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
  // Tener en cuenta que para la selección por iconos hay que usar enlaces o recursos locales.
  let indexToShow = 0;
  const activities = [
    {
      questionId: 1,
      questionText:
        "¿Cuál es el propósito principal de recolectar agua de lluvia para riego?",
      questionOptions: [
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
      ],
      positiveFeedback:
        "¡Correcto, Santiago! El propósito principal de recolectar agua de lluvia para riego es reducir el uso de agua potable en el riego de plantas. Al utilizar agua de lluvia, podemos conservar los recursos hídricos y hacer un uso más eficiente del agua disponible. ¡Excelente trabajo!",
      negativeFeedback:
        "Esa no es la respuesta correcta, Santiago. El propósito principal de recolectar agua de lluvia para riego es reducir el uso de agua potable en el riego de plantas. Esto nos ayuda a conservar los recursos hídricos y hacer un uso más eficiente del agua disponible. Te animo a que sigas aprendiendo sobre prácticas sostenibles como esta. ¡Sigue adelante!",
    },
    {
      questionId: 2,
      questionText:
        "¿Cuál es uno de los principales beneficios ambientales de andar en bicicleta?",
      questionOptions: [
        {
          id: "1",
          choiceLetter: "A",
          text: "Reducir la huella de carbono al evitar el uso de vehículos motorizados.",
        },
        {
          id: "2",
          choiceLetter: "B",
          text: "Aumentar la congestión vehicular en las calles.",
        },
        {
          id: "3",
          choiceLetter: "C",
          text: "Contribuir al calentamiento global al emitir menos gases de efecto invernadero.",
        },
      ],
      positiveFeedback:
        "¡Muy bien, Santiago! Uno de los principales beneficios ambientales de andar en bicicleta es reducir la huella de carbono al evitar el uso de vehículos motorizados. Al elegir la bicicleta como medio de transporte, estás contribuyendo activamente a la reducción de las emisiones de gases de efecto invernadero y al cuidado del medio ambiente. ¡Excelente elección!",
      negativeFeedback:
        "Lo siento, esa no es la respuesta correcta. Uno de los principales beneficios ambientales de andar en bicicleta es reducir la huella de carbono al evitar el uso de vehículos motorizados. Esto ayuda a disminuir las emisiones de gases de efecto invernadero y a combatir el cambio climático. ¡No te preocupes, sigue aprendiendo sobre los beneficios de la movilidad sostenible!",
    },
    {
      questionId: 3,
      questionText: "¿Será que camino o mejor me voy en MIO?",
      questionOptions: [
        {
          id: "1",
          choiceLetter: "A",
          text: "Icono de caminar",
        },
        {
          id: "2",
          choiceLetter: "B",
          text: "Icono de MIO",
        },
      ],
      positiveFeedback:
        "¡Genial! Caminar en vez de usar transporte contaminante está súper. ¡Sigue así!",
      negativeFeedback:
        "Comprendo, pero el bus no es lo más ecológico. Caminar es mejor pa' la Tierra. ¡Yo veré!",
    },
  ];

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
              {activities[indexToShow].questionText}
            </Text>
          </View>

          <View style={styles.questionsStyles.answersContainer}>
            {activities[indexToShow].questionOptions.map((option) => (
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
