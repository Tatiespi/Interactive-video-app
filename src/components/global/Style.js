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
      top: screenHeight / 2 - screenHeight * 0.7 / 2,
      left: screenWidth / 2 - screenWidth * 0.6 / 2,
      width: screenWidth * 0.6,
      height: screenHeight * 0.75,
      backgroundColor: "rgba(128, 128, 128, 0.85)",
      flexDirection: "column",  // Modificado a "column" para que el texto esté encima de los botones
      justifyContent: "center",
      alignItems: "center",
      borderBottomLeftRadius: 30,
      borderBottomRightRadius: 30,
    },
    questionContainer: {
      marginLeft: 270,
      marginBottom: -150,  // Ajusta el espacio entre el texto y las opciones
      marginTop: 20,  // Ajusta este valor para que el texto baje hacia abajo
   },
   questionText: {
      fontSize: 18,  // Ajusta el tamaño de fuente del texto de la pregunta
      color: "white",
      textAlign: "center"
   },
    questionsButtons: {
      marginRight: 100,
      color: "white",
      

    },
    
     answersContainer: {
      marginTop: 50, // Ajusta este valor según sea necesario para la separación vertical
      
    },
    
    optionText: {
      flexShrink: 1,
      marginRight: 120, // O ajusta según tu preferencia
      marginTop: 4,
      fontSize: 10, // Ajusta según tu preferencia
      
    },
    
    option: {
      flexDirection: "row",
      marginVertical: 20, // Modifica este valor según sea necesario para la separación vertical
      marginTop: 10, // Ajusta este valor según sea necesario para la posición vertical de las letras
      
    },
   
    optionLetterContainer: {
      marginRight: 5,
      marginLeft: 0,  // Ajusta el valor del margen izquierdo
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "orange",
      borderRadius: 15,
      width: 30,
      height: 30,
      
    },
    optionCorrect: {
      backgroundColor: "green",
    },
    optionIncorrect: {
      backgroundColor: "red",
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
});
