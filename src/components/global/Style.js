import { StyleSheet, Dimensions } from "react-native";

const screenWidth = Dimensions.get("screen").width;
const screenHeight = Dimensions.get("screen").height;

export const styles = StyleSheet.create({
  generalStyles: {
    container: {
      flex: 1,
    },
  },
  questionsStyles: {
    container: {
      position: "absolute",
      top: screenHeight / 2 - 220,
      left: screenWidth / 2 - 425,
      width: screenWidth / 1.2,
      height: screenHeight / 1.5,
      backgroundColor: "rgba(128, 128, 128, 0.85)",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      borderBottomLeftRadius: 15,
      borderBottomRightRadius: 15,
    },
    optionsContainer: {
      display: "flex",
      alignItems: "center",
      marginRight: 45,
    },
    option: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      marginVertical: 8,
    },
    optionLetter: {
      marginRight: 8,
    },
  },
  dragDropStyles: {
    container: {
      marginTop: screenHeight / 5,
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-evenly",
      alignItems: "center",
    },
    frame: {
      width: 200,
      height: 200,
      borderWidth: 8,
      borderColor: "black",
      borderRadius: 20,
    },
    image: {
      width: 150,
      height: 150,
      resizeMode: "contain",
    },
    frameImage: {
      width: 185,
      height: 190,
      resizeMode: "contain",
      marginTop: 18,
    },
    trashImage: {
      width: 80,
      height: 80,
      resizeMode: "contain",
      marginHorizontal: 10,
    },
    imagesContainer: {
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
    },
    feedbackText: {
      textAlign: "center",
    },
  },
  feedbackStyles: {
    container: {
      position: "absolute",
      left: screenWidth / 2 - 425,
      width: screenWidth / 1.2,
      height: screenHeight / 1.5,
      backgroundColor: "rgba(128, 128, 128, 0.85)",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "space-evenly",
      borderBottomLeftRadius: 15,
      borderBottomRightRadius: 15,
    },
    image: {
      width: 57.69,
      height: 56.88,
    },
    text: {
      paddingHorizontal: 25,
      color: "#FFFFFF",
      textTransform: "uppercase",
      textAlign: "center",
      fontSize: 18,
      fontWeight: 700,
    },
    buttonWrapper: {
      alignItems: "center",
      position: "relative",
      top: screenHeight / 1.6,
    },
  },
});
