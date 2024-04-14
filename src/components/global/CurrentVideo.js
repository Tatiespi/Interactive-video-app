import React, { useRef, useEffect, useState } from "react";
import { Video } from "expo-av";
import { styles } from "./Style";
import * as ScreenOrientation from "expo-screen-orientation";
export default function CurrentVideo({ onVideoUpdates, videoUrl }) {
  const videoRef = useRef(null);
  let videoUpdates = {
    isPaused: false,
  };
  // Set the screen orientation to landscape by default
  ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE);

  useEffect(() => {
    // Function to pause the video after x seconds (the amount of seconds must vary depending on the scene).
    const pauseVideo = setTimeout(() => {
      if (videoRef.current) {
        videoRef.current.pauseAsync();
        videoUpdates.isPaused = true;
        onVideoUpdates(videoUpdates);
      }
    }, 10000);

    // Clear the timeout when the component unmounts or when the video is paused manually
    return () => clearTimeout(pauseVideo);
  }, []);

  return (
    <Video
      style={styles.videoStyles}
      ref={videoRef}
      source={{
        uri: videoUrl,
      }}
      useNativeControls={false}
      shouldPlay={true}
      resizeMode='cover'
      isLooping
    />
  );
}
