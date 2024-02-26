// QuestionWithAnswers.js
import React, { useState, useEffect } from 'react';
import { View, Text, Button as RNButton } from 'react-native';

const QuestionWithAnswers = ({ onVideoChange }) => {
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Temporizador para mostrar la interfaz después de 3 segundos
    const timer = setTimeout(() => {
      setVisible(true);
    }, 3000);

    return () => {
      // Limpia el temporizador cuando el componente se desmonta
      clearTimeout(timer);
    };
  }, []);

  const options = [
    { id: 1, text: 'Porque si', videoUrl: 'https://files.catbox.moe/1sgsaf.mp4' },
    { id: 2, text: 'Porque no', videoUrl: 'https://nuevo-video2.mp4' },
    { id: 3, text: 'Para salvar el petróleo', videoUrl: 'https://nuevo-video3.mp4' },
    { id: 4, text: 'Para salvar el medio ambiente', videoUrl: 'https://nuevo-video4.mp4' },
  ];

  const handleAnswerSelection = (option) => {
    setSelectedAnswer(option);
    onVideoChange(option.videoUrl);
    // Oculta la interfaz de preguntas después de seleccionar la respuesta
    setVisible(false);
  };

  return (
    <View style={{ display: visible ? 'flex' : 'none' }}>
      <Text>¿Por qué deberíamos reciclar?</Text>
      {options.map((option) => (
        <RNButton
          key={option.id}
          title={option.text}
          type={selectedAnswer === option ? 'solid' : 'outline'}
          onPress={() => handleAnswerSelection(option)}
        />
      ))}
      <Text>Respuesta seleccionada: {selectedAnswer?.text}</Text>
    </View>
  );
};

export default QuestionWithAnswers;
