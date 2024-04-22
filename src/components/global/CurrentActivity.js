import React, { useState } from "react";
import { View, Text, TouchableHighlight } from "react-native";
import { styles } from "./Style";
import FeedBack from "./Feedback";
import DragDropLight from "../custom/Drag&DropLight";
import DragDrop from "../custom/Drag&Drop";
import IconQuestion from "../custom/IconQuestion";
import ActivityButton from "../custom/ActivityButton";

const CurrentActivity = ({ currentActivityInfo, onNextQuestion }) => {
  const [showFeedback, setShowFeedback] = useState(false);
  const [isRightAnswer, setIsRightAnswer] = useState(false);
  const handleRetryGame = () => {
    // Reiniciar el estado del video aquí
    setShowFeedback(false);
  };
  const handleAnswerSelection = (option) => {
    setIsRightAnswer(option.isCorrect);
    setShowFeedback(true);
  };
  const handleNextQuestion = () => {
    onNextQuestion();
    setShowFeedback(false);
  };
  const activities = {
    question: (
      <View style={[styles.questionsStyles.container]}>
        <View style={styles.questionsStyles.questionContainer}>
          <Text style={styles.questionsStyles.questionText}>
            {currentActivityInfo?.text}
          </Text>
        </View>

        <View style={styles.questionsStyles.answersContainer}>
          {currentActivityInfo?.options?.map((option) => (
            <View key={option.id}>
              <TouchableHighlight
                testID={`button${option.letter}`}
                onPress={() => handleAnswerSelection(option)}
                underlayColor={option.isCorrect ? "green" : "red"}
                style={[styles.questionsStyles.option]}
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
      </View>
    ),
    iconQuestion: (
      <IconQuestion
        currentActivityInfo={currentActivityInfo}
        onFeedbackChange={(value) => setShowFeedback(value)}
        onAnswerChange={(value) => setIsRightAnswer(value)}
      />
    ),
    dragDrop: (
      <DragDropLight
        onFeedbackChange={(value) => setShowFeedback(value)}
        onAnswerChange={(value) => setIsRightAnswer(value)}
      />
    ),
    dragDropMultiElement: (
      <DragDrop
        onFeedbackChange={(value) => setShowFeedback(value)}
        onAnswerChange={(value) => setIsRightAnswer(value)}
      />
    ),
  };
  return (
    // General container
    <View style={styles.generalStyles.container}>
      {!showFeedback && (
        <View style={styles.generalStyles.container}>
          {activities[currentActivityInfo?.type]}
        </View>
      )}
      {/* Feedback for the current activity */}
      {showFeedback && (
        <FeedBack
          textToShow={
            isRightAnswer
              ? currentActivityInfo?.positiveFeedback
              : currentActivityInfo?.negativeFeedback
          }
          isRightAnswer={isRightAnswer ? true : false}
          onRetryGame={handleRetryGame}
          onNextQuestion={handleNextQuestion}
        ></FeedBack>
      )}
      {/* Feedback end */}
      <ActivityButton text='Hola mundo' />
    </View>
    // General container end
  );
};

export default CurrentActivity;
