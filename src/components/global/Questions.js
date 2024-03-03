import React, { useState, useEffect } from "react";
import { View, Text, Button as RNButton } from "react-native";
import { styles } from "./Style";

const QuestionWithAnswers = ({ onVideoChange }) => {
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Temporizador para mostrar la interfaz después de 3 segundos
    const timer = setTimeout(() => {
      setVisible(true);
    }, 1500);

    return () => {
      // Limpia el temporizador cuando el componente se desmonta
      clearTimeout(timer);
    };
  }, []);

  const options = [
    {
      id: 1,
      choiceLetter: "A",
      text: "Porque si",
      videoUrl: "https://files.catbox.moe/1sgsaf.mp4",
    },
    {
      id: 2,
      choiceLetter: "B",
      text: "Porque no",
      videoUrl: "https://nuevo-video2.mp4",
    },
    {
      id: 3,
      choiceLetter: "C",
      text: "Para salvar el petróleo",
      videoUrl: "https://nuevo-video3.mp4",
    },
  ];

  const handleAnswerSelection = (option) => {
    setSelectedAnswer(option);
    onVideoChange(option.videoUrl);
    // Oculta la interfaz de preguntas después de seleccionar la respuesta
    setVisible(false);
  };

  return (
    <View
      style={[
        styles.questionsStyles.container,
        { display: visible ? "flex" : "none" },
      ]}
    >
      <View style={styles.questionsStyles.optionsContainer}>
        {options.map((option) => (
          <View style={styles.questionsStyles.option} key={option.id}>
            <Text style={styles.questionsStyles.optionLetter}>
              {option.choiceLetter}
            </Text>
            <RNButton
              title={option.text}
              type={selectedAnswer === option ? "solid" : "outline"}
              onPress={() => handleAnswerSelection(option)}
            ></RNButton>
          </View>
        ))}
      </View>
      <View>
        <Text>¿Por qué deberíamos reciclar?</Text>
      </View>
      {/* <Text>Respuesta seleccionada: {selectedAnswer?.text}</Text> */}
    </View>
  );
};

export default QuestionWithAnswers;
