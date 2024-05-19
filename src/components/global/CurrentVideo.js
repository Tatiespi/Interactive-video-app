import React from "react";
import { Video } from "expo-av";
import { styles } from "./Style";
import * as ScreenOrientation from "expo-screen-orientation";
export default function CurrentVideo({ onVideoFinished, videoUrl }) {
  const scenes = {
    escena_1: require("../../../assets/videos/escena-1.mp4"),
    escena_2: require("../../../assets/videos/escena-2.mp4"),
    escena_3: require("../../../assets/videos/escena-3.mp4"),
    escena_4: require("../../../assets/videos/escena-4.mp4"),
    escena_5: require("../../../assets/videos/escena-5.mp4"),
  };
  // Set the screen orientation to landscape by default
  ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE);

  const handlePlaybackStatusUpdate = (status) => {
    if (status.didJustFinish) {
      // If video has finished playing, send a callback to the App component.
      onVideoFinished(true);
    }
  };

  return (
    <Video
      style={styles.videoStyles}
      source={scenes[videoUrl]}
      onPlaybackStatusUpdate={handlePlaybackStatusUpdate}
      useNativeControls={false}
      shouldPlay={true}
      resizeMode='cover'
      isLooping={false}
      rate={1}
      volume={1.5}
    />
  );
}
