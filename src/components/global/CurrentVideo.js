import React, { useRef, useEffect, useState } from "react";
import { Video } from "expo-av";
import { styles } from "./Style";
import * as ScreenOrientation from "expo-screen-orientation";
export default function CurrentVideo({ onVideoUpdates, nextVideo }) {
  const videoRef = useRef(null);
  const [videoToShow, setVideoToShow] = useState(0);
  let videoUpdates = {
    isPaused: false,
  };
  const videosToShow = [
    "https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
    "https://docs.evostream.com/sample_content/assets/bun33s.mp4",
  ];
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

  // Update videoToShow immediately when nextVideo changes
  useEffect(() => {
    setVideoToShow(nextVideo > 0 ? nextVideo : 0);
    videoRef.current.playAsync();
    videoUpdates.isPaused = false;
    onVideoUpdates(videoUpdates);
  }, [nextVideo]);

  return (
    <Video
      style={styles.videoStyles}
      ref={videoRef}
      source={{
        uri: videosToShow[videoToShow],
      }}
      useNativeControls={false}
      shouldPlay={true}
      resizeMode='cover'
      isLooping
    />
  );
}
