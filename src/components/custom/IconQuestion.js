import { View, Text, TouchableHighlight, Image } from "react-native";
import { styles } from "../global/Style";

const IconQuestion = ({ currentActivityInfo, onFeedbackChange, onAnswerChange }) => {
  const icons = {
    walking_icon: require("../../../assets/walking-icon.png"),
    bus_icon: require("../../../assets/bus-icon.png"),
  };

  const handleAnswerSelection = (option) => {
    onAnswerChange(option.isCorrect);
    onFeedbackChange(true);
  };

  return (
    <View style={[styles.questionsStyles.iconQuestionGeneralContainer]}>
      <View>
        <Text style={styles.questionsStyles.questionText}>
          {currentActivityInfo.text}
        </Text>
      </View>

      <View style={styles.questionsStyles.iconAnswersContainer}>
        {currentActivityInfo.options.map((option) => (
          <View key={option.id}>
            <TouchableHighlight
              testID={`button${option.letter}`}
              onPress={() => handleAnswerSelection(option)}
              underlayColor={option.isCorrect ? "green" : "red"}
              style={[styles.questionsStyles.option]}
            >
              <Image
                style={styles.questionsStyles.iconOptionContainer}
                source={icons[option.icon]}
              ></Image>
            </TouchableHighlight>
          </View>
        ))}
      </View>
    </View>
  );
};

export default IconQuestion;
