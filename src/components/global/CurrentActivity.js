import React, { useState } from "react";
import { View, Text, TouchableHighlight } from "react-native";
import { styles } from "./Style";
import FeedBack from "./Feedback";

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
  return (
    // General container
    <View>
      {/* Questions case container. There has to be one for the D&D. */}
      {!showFeedback && (
        <View>
          <View style={[styles.questionsStyles.container]}>
            <View style={styles.questionsStyles.questionContainer}>
              <Text style={styles.questionsStyles.questionText}>
                {currentActivityInfo.text}
              </Text>
            </View>

            <View style={styles.questionsStyles.answersContainer}>
              {currentActivityInfo.options.map((option) => (
                <View key={option.id}>
                  <TouchableHighlight
                    testID={`button${option.letter}`}
                    onPress={() => handleAnswerSelection(option)}
                    underlayColor={option.isCorrect ? "green" : "red"}
                    style={[styles.questionsStyles.option]}
                  >
                    <>
                      <View
                        style={styles.questionsStyles.optionLetterContainer}
                      >
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
        </View>
      )}
      {/* Questions end */}
      {/* Feedback for the current activity */}
      {showFeedback && (
        <FeedBack
          textToShow={
            isRightAnswer
              ? currentActivityInfo.positiveFeedback
              : currentActivityInfo.negativeFeedback
          }
          isRightAnswer={isRightAnswer ? true : false}
          onRetryGame={handleRetryGame}
          onNextQuestion={handleNextQuestion}
        ></FeedBack>
      )}
      {/* Feedback end */}
    </View>
    // General container end
  );
};

export default CurrentActivity;
