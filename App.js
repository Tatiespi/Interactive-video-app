import React, { useState, useRef, useEffect } from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import CurrentVideo from "./src/components/global/CurrentVideo.js";
import DragDrop from "./src/components/custom/Drag&Drop.js";
import Questions from "./src/components/global/Questions.js";
import FeedBack from "./src/components/global/Feedback.js";
import activitiesJson from "./src/json/activities.json";
import { styles } from "./src/components/global/Style.js";
import CurrentActivity from "./src/components/global/CurrentActivity.js";
export default function App() {
  const [showFeedback, setShowFeedback] = useState(false);
  const [answerResult, setAnswerResult] = useState(true);
  const [showActivity, setShowActivity] = useState(false);
  const [activityIndex, setActivityIndex] = useState(0);
  const activities = activitiesJson;
  const handleVideoUpdates = (updates) => {
    setShowActivity(updates.isPaused);
  };
  const handleNextQuestion = () => {
    setActivityIndex(activityIndex + 1);
  };

  useEffect(() => {
    const hideFeedback = setTimeout(() => {
      answerResult ? setShowFeedback(false) : setShowFeedback(true);
    }, 3500);
    return () => clearTimeout(hideFeedback);
  }, [answerResult]);

  return (
    <View style={styles.generalStyles.container}>
      {/* Current video playing */}
      <CurrentVideo
        videoUrl={activities[activityIndex].videoUrl}
        onVideoUpdates={handleVideoUpdates}
      />
      {/* Current video playing end */}
      {/* Current activity appearing */}
      <CurrentActivity
        currentActivityInfo={activities[activityIndex]}
        onNextQuestion={handleNextQuestion}
      />
      {/* Current activity appearing end */}
    </View>
  );
}
