// Home.js
import React, { useRef, useEffect } from 'react';
import { StyleSheet, Text, Button, View } from 'react-native';
import { Video, ResizeMode } from 'expo-av';

export default function Home({ videoUrl }) {
  const video = useRef(null);

  useEffect(() => {
    const loadAndPlayVideo = async () => {
      if (video.current) {
        await video.current.unloadAsync();
        await video.current.loadAsync({ uri: videoUrl }, {}, false);
        await video.current.playAsync();
      }
    };

    loadAndPlayVideo();
  }, [videoUrl]);

  return (
    <View style={styles.container}>
      <Video
        ref={video}
        style={styles.video}
        useNativeControls={false}
        resizeMode={ResizeMode.CONTAIN}
        isLooping
      />
      <View style={styles.buttons}>
        <Button
          color={'#84bf04'}
          title="Pause"
          onPress={() => video.current && video.current.pauseAsync()}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
  },
  video: {
    alignSelf: 'center',
    width: 320,
    height: 200,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
