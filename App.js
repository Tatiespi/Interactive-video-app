// App.js
import React, { useState } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import Navbar from './src/components/global/Navbar';
import Home from './src/components/global/Home';
import DragDrop from "./src/components/custom/Drag&Drop";
import QuestionWithAnswers from './src/components/global/Questions';

export default function App() {
  const [videoUrl, setVideoUrl] = useState('https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4');

  const handleVideoChange = (newVideoUrl) => {
    setVideoUrl(newVideoUrl);
  };

  return (
    <View style={styles.container}>
      <Navbar />
      <Home videoUrl={videoUrl} onVideoChange={handleVideoChange} />
      <QuestionWithAnswers onVideoChange={handleVideoChange} />
      <DragDrop/>
    </View>
  );
}

// Consider using users phone dimensions.
const { height } = Dimensions.get('screen');

const styles = StyleSheet.create({
  container: {
    paddingVertical: height / 22,
  },
});
