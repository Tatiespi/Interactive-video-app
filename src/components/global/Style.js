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
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      backgroundColor: "rgba(128, 128, 128, 0.85)",
      flex: 1,
    },
    frame: {
      width: 150,
      height: 130,
      borderRadius: 100,
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.8,
      shadowRadius: 8,
      elevation: 15,
      marginTop: 45,
      alignItems: "center",
      justifyContent: "center",
    },
    image: {
      width: 80,
      height: 80,
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
      marginRight: 120,
    },
    imagePair: {
      alignItems: "center",
      flexDirection: "column",
    },
    feedbackText: {
      textAlign: "center",
    },
    dragDropContainer: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-evenly",
      alignItems: "center",
      marginTop: screenHeight / 14,
    },
    tittleText: {
      textAlign: "center",
      color: "#FFFFFF",
      textTransform: "uppercase",
      textAlign: "center",
      fontSize: 20,
      fontWeight: 700,
      paddingHorizontal: 80,
    },
    space: {
      marginRight: 130,
    },
    imageGroupContainer: {
      flexDirection: "column",
    },
    verticalSpace: {
      marginTop: 110,
    },
  },
});
