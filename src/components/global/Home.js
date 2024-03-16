import React, { useRef, useEffect } from "react";
import { StyleSheet, Text, Button, View } from "react-native";
import { Video, ResizeMode } from "expo-av";

export default function Home({ videoUrl }) {
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});

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
        source={{
          uri: "https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
        }}
        useNativeControls={false}
        resizeMode={ResizeMode.CONTAIN}
        isLooping
        onPlaybackStatusUpdate={(status) => setStatus(() => status)}
      />
      <View style={styles.buttons}>
        <Button
          color={"#84bf04"}
          title={status.isPlaying ? "Pause" : "Play"}
          onPress={() =>
            status.isPlaying
              ? video.current.pauseAsync()
              : video.current.playAsync()
          }
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "center",
  },
  video: {
    alignSelf: "center",
    width: 320,
    height: 200,
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});
