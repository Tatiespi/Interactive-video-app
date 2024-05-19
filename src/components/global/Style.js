import { StyleSheet, Dimensions } from "react-native";
import { color } from "react-native-elements/dist/helpers";

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
      top: screenHeight / 2 - screenHeight * 0.5,
      left: screenWidth / 2 - screenWidth * 0.43,
      width: screenWidth * 0.8,
      height: screenHeight * 0.75,
      backgroundColor: "rgba(128, 128, 128, 0.85)",
      flexDirection: "row", // Cambiado a "row" para alinear elementos horizontalmente
      justifyContent: "space-between", // Ajusta el espacio entre los elementos
      alignItems: "center",
      borderBottomLeftRadius: 30,
      borderBottomRightRadius: 30,
      paddingHorizontal: 20, // Añadido padding horizontal para separar los elementos del borde
    },
    questionContainer: {
      flex: 1, // Ajusta el tamaño del contenedor de la pregunta para que ocupe el espacio disponible
      marginRight: 20, // Ajusta el margen derecho para separar del contenedor de respuestas
    },
    questionText: {
      fontSize: 18,
      fontWeight: "bold",
      color: "white",
      textAlign: "center",
    },
    answersContainer: {
      flex: 1, // Ajusta el tamaño del contenedor de respuestas para que ocupe el espacio disponible
    },
    optionText: {
      flexShrink: 1,
      fontSize: 14, // Ajusta el tamaño de fuente según tu preferencia
    },
    option: {
      flexDirection: "row",
      alignItems: "center", // Centra verticalmente el texto con las letras
      marginBottom: 10, // Ajusta este valor según tu preferencia
      borderRadius: 10,
    },
    optionLetterContainer: {
      marginRight: 10, // Ajusta el margen derecho para separar las letras del texto
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "orange",
      borderRadius: 15,
      width: 30,
      height: 30,
      backgroundColor: "#DF8A58",
    },
    optionCorrect: {
      backgroundColor: "green",
    },
    optionIncorrect: {
      backgroundColor: "red",
    },
    iconQuestionGeneralContainer: {
      position: "absolute",
      top: screenHeight / 2 - screenHeight * 0.5,
      left: screenWidth / 2 - screenWidth * 0.43,
      width: screenWidth * 0.8,
      height: screenHeight * 0.75,
      backgroundColor: "rgba(128, 128, 128, 0.85)",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      borderBottomLeftRadius: 30,
      borderBottomRightRadius: 30,
    },
    iconAnswersContainer: {
      display: "flex",
      flexDirection: "row",
      marginTop: 40,
    },
    iconOptionContainer: {
      display: "flex",
      marginHorizontal: 35,
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
    lightFrame: {
      width: 150,
      height: 130,
      borderRadius: 100,
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.8,
      shadowRadius: 8,
      elevation: 15,
      marginBottom: 90,
      alignItems: "center",
      justifyContent: "center",
      marginLeft: 80,
      marginRight: 80,
      position: "relative",
    },
    dragItem: {
      zIndex: 1,
      position: "abosolute",
    },
    image: {
      width: 80,
      height: 80,
      resizeMode: "contain",
      marginLeft: 13,
      marginTop: 7,
    },
    feedbackImage: {
      width: 80,
      height: 80,
      resizeMode: "contain",
      marginLeft: 0,
      marginTop: 130,
      position: "relative",
    },
    lightFrameImage: {
      width: 110,
      height: 110,
      resizeMode: "contain",
      marginTop: 0,
      position: "absolute",
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
    lightImagesContainer: {
      flexDirection: "row",
      justifyContent: "center",
      marginRight: 0,
    },
    imagePair: {
      alignItems: "center",
      flexDirection: "column",
      backgroundColor: "white",
      borderRadius: 100,
      width: 110,
      height: 100,
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
    lightDragDropContainer: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-evenly",
      alignItems: "center",
      marginTop: screenHeight / 14,
      marginLeft: 120,
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
      textAlign: "center",
      fontSize: 18,
      fontWeight: 700,
    },
    nextButtonWrapper: {
      alignItems: "center",
      position: "relative",
      top: screenHeight / 1.9,
      left: screenWidth / 3,
    },
    retryButtonWrapper: {
      alignItems: "center",
      position: "relative",
      top: screenHeight / 1.6,
    },
  },
  videoStyles: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  buttonStyles: {
    container: {
      position: "absolute",
      top: screenHeight / 2 - screenHeight * 0.49,
      left: screenWidth / 2 - screenWidth * 0.06,
    },
    buttonContent: {
      borderRadius: 50,
      padding: 4,
    },
    buttonImage: {
      width: 75,
      height: 75,
    },
    buttonInfo: {
      position: "absolute",
      top: screenHeight / 1.8,
      left: screenWidth / 2 - screenWidth * 0.5,
    },
  },
  guideMenuStyles: {
    container: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "rgba(223, 138, 88, 0.85)",
      flex: 1,
    },
    guideMenuContainer: {
      display: "flex",
      alignItems: "center",
      width: 320,
      height: 320,
      borderRadius: 170, // Para hacer el borde circular
      borderWidth: 5, // Grosor del borde
      borderStyle: "dotted", // Estilo de línea punteada
      borderColor: "rgba(81, 117, 2, 1)", // Color del borde
    },
    guiaLogoImage: {
      marginTop: 10
    },
    guideButtons: {
      backgroundColor: "rgba(81, 117, 2, 1)",
      width: 65,
      height: 65,
      borderRadius: 50,
      borderColor: "white",
      borderWidth: 3,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      marginLeft: 215
    },
    guideButtonsRight: {
      backgroundColor: "rgba(81, 117, 2, 1)",
      width: 65,
      height: 65,
      borderRadius: 50,
      borderColor: "white",
      borderWidth: 3,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    buttonIcons: {
      with: 40,
      height: 40
    },
    guideOptionClimateContainer:{
      position: "absolute",
      left: 50,
      top: 70,
      display: "flex",
      flexDirection: "row",
      alignItems: "center"
    },
    guideOptionDroughtContainer:{
      position: "absolute",
      left: 50,
      top: 260,
      display: "flex",
      flexDirection: "row",
      alignItems: "center"
    },
    guideOptionHeatContainer:{
      position: "absolute",
      left: 550,
      top: 260,
      display: "flex",
      flexDirection: "row",
      alignItems: "center"
    },
    guideOptionFireContainer:{
      position: "absolute",
      left: 550,
      top: 70,
      display: "flex",
      flexDirection: "row",
      alignItems: "center"
    },
    guideOptionTextContainer: {
      backgroundColor: "rgba(81, 117, 2, 1)",
      borderRadius: 44,
      width: 232,
      height: 55,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      borderColor: "white",
      borderWidth: 3,
      position: "absolute"
    },
    guideOptionTextRightContainer: {
      backgroundColor: "rgba(81, 117, 2, 1)",
      borderRadius: 44,
      width: 232,
      height: 55,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      borderColor: "white",
      borderWidth: 3,
      position: "absolute",
      marginLeft: 45
    },
    guideOptionText: {
      color: "white",
      fontSize: 18,
    },
  },
  guideInfographicStyles: {
    container: {
      position: "absolute",
      width: screenWidth / 1.04,
      height: screenHeight,
    },
    closeBtn: {
      position: "relative",
      left: screenWidth / 1.095,
      top: screenHeight / 14,
    },
    nextBtn: {
      position: "relative",
      left: screenWidth / 1.18,
      top: screenHeight / 1.52,
    },
    prevBtn: {
      position: "relative",
      left: screenWidth / 45,
      top: screenHeight / 1.5,
    },
  },
  funFactsStyles:{
    container: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    },
    factContainer:{
      width: 450,
  height: 250,
  backgroundColor: "rgba(223, 138, 88, 1)",
  borderRadius: 50,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',  // Posicionamiento relativo para el contenedor
    },
    infoButton: {
      width: 50,
      height: 50,
      borderRadius: 50,
      backgroundColor: "rgba(223, 138, 88, 1)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      marginTop: 30,
      marginLeft: 780
    },
    infoIcon: {
      fontSize: 30,
      color: "white",
      fontWeight: "bold"
    },
    triangle: {
      position: 'absolute',
      top: -40, 
      right: -135, 
      width: 0,
      height: 0,
      borderLeftWidth: 0,
      borderRightWidth: 160,
      borderBottomWidth: 60,
      borderLeftColor: 'transparent',
      borderRightColor: 'transparent',
      borderBottomColor: 'rgba(223, 138, 88, 1)',
      transform: [{ rotate: '-30deg' }],
    },
    factText: {
      color: "white",
      fontWeight: "bold",
      fontSize: 25,
      marginLeft: 25,
      marginRight: 25,
      textAlign: "center"
    },
    closeButton: {
      position: 'absolute',
      top: 9, // Ajusta según sea necesario para alineamiento vertical
      left: 20, // Ajusta para mover el botón a la esquina izquierda
      width: 30, // Ancho del botón
      height: 30, // Alto del botón
      borderRadius: 20, // Redondea las esquinas para un botón circular
      backgroundColor: "white",
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 1, // Asegúrate de que el botón esté por encima de otros elementos
    },
    closeIcon: {
      color: "rgba(223, 138, 88, 1)", // Color del icono o texto dentro del botón
      fontSize: 21, // Tamaño del texto o icono
      fontWeight: 'bold'
    }
  },
  
  },
  
  
);
