import React, { useState } from "react";
import { View, Text, TouchableHighlight } from "react-native";
import { styles } from "../global/Style";

const FunFacts = ({ currenFact, currentActivity }) => {
  const [showed, setShowed] = useState(false);
  const toggleFact = () => {
    setShowed(true);
  };
  const toggleClose = () => {
    setShowed(false);
  }
  return (
    <View style={styles.funFactsStyles.container}>
      <TouchableHighlight
        onPress={() => toggleFact()}
        style={[styles.funFactsStyles.infoButton, {top: currentActivity == "question"  ? -280 : currentActivity == "iconQuestion" ? 30 : -355}]}
      >
        <Text style={styles.funFactsStyles.infoIcon}>i</Text>
      </TouchableHighlight>
      {showed && (
        <View>
          <View style={[styles.funFactsStyles.triangle, {top: currentActivity == "question" ? -270 : currentActivity == "iconQuestion" ? 40 : -345}]}></View>
          <View style={[styles.funFactsStyles.factContainer, {top: currentActivity == "question" ? -230 : currentActivity == "iconQuestion" ? 80 : -305}]}>
            <TouchableHighlight
              onPress={() => toggleClose()}
              style={styles.funFactsStyles.closeButton}
            >
              <Text style={styles.funFactsStyles.closeIcon}>X</Text>
            </TouchableHighlight>
            <Text style={styles.funFactsStyles.factText}>{currenFact}</Text>
          </View>
        </View>
      )}
    </View>
  );
};

export default FunFacts;
