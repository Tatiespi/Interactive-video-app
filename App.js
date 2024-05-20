import React, { useState } from "react";
import { StatusBar } from 'expo-status-bar';
import { View } from "react-native";
import CurrentVideo from "./src/components/global/CurrentVideo.js";
import activitiesJson from "./src/json/activities.json";
import { styles } from "./src/components/global/Style.js";
import CurrentActivity from "./src/components/global/CurrentActivity.js";
export default function App() {
  const [showActivity, setShowActivity] = useState(false);
  const [activityIndex, setActivityIndex] = useState(0);
  const activities = activitiesJson;
  const handleVideoFinished = (videoFinished) => {
    setShowActivity(videoFinished);
    if (activityIndex === 5) {
      setActivityIndex(activityIndex + 1);
    }
  };
  const handleNextQuestion = () => {
    setActivityIndex(activityIndex + 1);
    setShowActivity(false);
  };

  return (
    <View style={styles.generalStyles.container}>
      {/* Current video playing */}
      {/* Rendering until the fourth position of the activities JSON, because the fifth one has no video to render */}
      {activityIndex !== 6 && (
        <CurrentVideo
          videoUrl={activities[activityIndex].videoUrl}
          onVideoFinished={handleVideoFinished}
        />
      )}
      {/* Current video playing end */}
      {/* Current activity appearing */}
      {(showActivity || activityIndex === 6) && (
        <CurrentActivity
          currentActivityInfo={activities[activityIndex]}
          onNextQuestion={handleNextQuestion}
        />
      )}
      {/* Current activity appearing end */}
      <StatusBar style="auto" />
    </View>
  );
}
