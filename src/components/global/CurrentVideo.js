import React, { useRef, useState } from "react";
import { Video } from "expo-av";
import { styles } from "./Style";
import * as ScreenOrientation from "expo-screen-orientation";
export default function CurrentVideo({ onVideoFinished, videoUrl }) {
  const videoRef = useRef(null);
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
      ref={videoRef}
      source={{
        uri: videoUrl,
      }}
      onPlaybackStatusUpdate={handlePlaybackStatusUpdate}
      useNativeControls={false}
      shouldPlay={true}
      resizeMode='cover'
      isLooping={false}
    />
  );
}
