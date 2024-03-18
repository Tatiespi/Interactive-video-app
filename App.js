import React, { useState, useRef, useEffect } from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import Navbar from "./src/components/global/Navbar";
import Home from "./src/components/global/Home";
import CurrentVideo from "./src/components/global/CurrentVideo.js";
import DragDrop from "./src/components/custom/Drag&Drop";
import Questions from "./src/components/global/Questions";
import FeedBack from "./src/components/global/Feedback.js";
import { styles } from "./src/components/global/Style.js";
export default function App() {
  // Textos para arrastre de objetos
  const objectsNegativeText =
    "Parece que hubo un pequeño contratiempo. Recuerda que el orden de los pasos para plantar un árbol es crucial para asegurar su crecimiento saludable. Te animo a que revises nuevamente los pasos y vuelvas a intentarlo. ¡No te desanimes, cada intento nos acerca más a un mundo más verde y sostenible";
  const objectsPositiveText =
    "¡Increíble, Santiago! Plantar un árbol es una acción significativa para contribuir al cuidado del medio ambiente y combatir el cambio climático. Al seguir los pasos correctos, estás ayudando a asegurar que el árbol tenga las mejores condiciones para crecer fuerte y sano. ¡Sigue así y sigue colaborando en la lucha por un futuro más verde!";

  // Textos para preguntas
  const questionsNegativeText =
    "Lo siento, esa no es la respuesta correcta. Uno de los principales beneficios ambientales de andar en bicicleta es reducir la huella de carbono al evitar el uso de vehículos motorizados. Esto ayuda a disminuir las emisiones de gases de efecto invernadero y a combatir el cambio climático. ¡No te preocupes, sigue aprendiendo sobre los beneficios de la movilidad sostenible!";
  const questionsPositiveText =
    "¡Muy bien, Santiago! Uno de los principales beneficios ambientales de andar en bicicleta es reducir la huella de carbono al evitar el uso de vehículos motorizados. Al elegir la bicicleta como medio de transporte, estás contribuyendo activamente a la reducción de las emisiones de gases de efecto invernadero y al cuidado del medio ambiente. ¡Excelente elección!";

  // Textos para preguntas sobre el agua
  const waterQuestionsNegativeText =
    " Esa no es la respuesta correcta, Santiago. El propósito principal de recolectar agua de lluvia para riego es reducir el uso de agua potable en el riego de plantas. Esto nos ayuda a conservar los recursos hídricos y hacer un uso más eficiente del agua disponible. Te animo a que sigas aprendiendo sobre prácticas sostenibles como esta. ¡Sigue adelante!";
  const waterQuestionsPositiveText =
    "¡Correcto, Santiago! El propósito principal de recolectar agua de lluvia para riego es reducir el uso de agua potable en el riego de plantas. Al utilizar agua de lluvia, podemos conservar los recursos hídricos y hacer un uso más eficiente del agua disponible. ¡Excelente trabajo!";

  const handleVideoChange = (newVideoUrl) => {
    setVideoUrl(newVideoUrl);
  };
  const [showFeedback, setShowFeedback] = useState(false);
  const [answerResult, setAnswerResult] = useState(true);
  const [showActivity, setShowActivity] = useState(false);
  const [nextVideo, setNextVideo] = useState(0);
  const handleRetryGame = () => {
    // Reiniciar el estado del juego aquí
    setShowFeedback(false);
  };
  const handleVideoUpdates = (updates) => {
    setShowActivity(updates.isPaused);
  };
  const handleChangeVideo = (videoId) => {
    setNextVideo(videoId);
  };

  useEffect(() => {
    const hideFeedback = setTimeout(() => {
      answerResult ? setShowFeedback(false) : setShowFeedback(true);
    }, 3500);
    return () => clearTimeout(hideFeedback);
  }, [answerResult]);

  return (
    <View style={styles.generalStyles.container}>
      <CurrentVideo onVideoUpdates={handleVideoUpdates} nextVideo={nextVideo} />
      {showFeedback ? (
        <FeedBack
          textToShow={
            answerResult
              ? waterQuestionsPositiveText
              : waterQuestionsNegativeText
          }
          isRightAnswer={answerResult ? true : false}
          onRetryGame={handleRetryGame}
        ></FeedBack>
      ) : (
        <Questions
          showActivity={showActivity}
          onChangeVideo={handleChangeVideo}
          onFeedbackChange={(value) => setShowFeedback(value)}
          onAnswerChange={(value) => setAnswerResult(value)}
        ></Questions>
      )}
    </View>
  );
}
