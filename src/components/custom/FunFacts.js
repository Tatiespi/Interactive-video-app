import React, { useState } from "react";
import { View, Text, Image, TouchableHighlight } from "react-native";
import { styles } from "../global/Style";

const FunFacts = ({ currenFact }) => {
  currenFact =
    "Cortar árboles contribuye al 11% de todas las emisiones de gases que calientan el planeta";
  const [showed, setShowed] = useState(true);
  const toggleFact = () =>{
    setShowed(!showed);
  }
  return (
    <View style={styles.funFactsStyles.container}>
      <TouchableHighlight onPress={() => toggleFact()} style={styles.funFactsStyles.infoButton}>
        <Text style={styles.funFactsStyles.infoIcon}>i</Text>
      </TouchableHighlight>
      {showed && (
        <View>
          <View style={styles.funFactsStyles.triangle}></View>
          <View style={styles.funFactsStyles.factContainer}>
            <Text style={styles.funFactsStyles.factText}>{currenFact}</Text>
          </View>
        </View>
      )}
    </View>
  );
};

export default FunFacts;
