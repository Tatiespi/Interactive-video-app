import React, { useState } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import Draggable from "react-native-draggable";

export default function DragDrop() {
  const [dropped, setDropped] = useState(false);
  const [correctImageId, setCorrectImageId] = useState(1);
  const handleDrop = (e, data, id) => {
    const frame = this.frame;
    const framePosition =
      frame &&
      frame.measure((fx, fy, width, height, px, py) => {
        console.log("Marco X:", px);
        console.log("Marco Y:", py);
        console.log("Ancho del marco:", width);
        console.log("Alto del marco:", height);
      });
    // Obtener las coordenadas del marco
    const frameX = 105.71428680419922; // Modifica estos valores según las coordenadas de tu marco
    const frameY = 145.7142791748047; // Modifica estos valores según las coordenadas de tu marco
    const frameWidth = 200; // Modifica estos valores según el ancho de tu marco
    const frameHeight = 200; // Modifica estos valores según el alto de tu marco

    // Obtener las coordenadas donde se soltó la imagen
    const dropX = data.moveX;
    const dropY = data.moveY;
    console.log(data);

    // Verificar si las coordenadas de la imagen están dentro del marco
    if (
      dropX > frameX &&
      dropY > frameY &&
      dropX < frameX + frameWidth &&
      dropY < frameY + frameHeight
    ) {
      if (id === correctImageId) {
        setDropped(true);
      } else {
        setDropped(false);
      }
    }
  };
  return (
    <View style={styles.container}>
      {/* Aquí va el marco */}
      <View
        ref={(ref) => {
          this.frame = ref;
        }}
        style={styles.frame}
      >
        {dropped ? (
          <Text style={styles.feedbackText}>Imagen correcta</Text>
        ) : (
          <Text style={styles.feedbackText}>Imagen incorrecta</Text>
        )}
        <Image
            source={require("../../../assets/suelo.png")}
            style={styles.frameImage}
          />
      </View>

      {/* Aquí van las imágenes */}
      <View style={styles.imagesContainer}>
        <Draggable onDragRelease={(e, data) => handleDrop(e, data, 1)}>
          <Image
            source={require("../../../assets/arbol.png")}
            style={styles.image}
          />
        </Draggable>
        <Draggable onDragRelease={(e, data) => handleDrop(e, data, 2)}>
          <Image
            source={require("../../../assets/papel.png")}
            style={styles.trashImage}
          />
        </Draggable>
        <Draggable onDragRelease={(e, data) => handleDrop(e, data, 3)}>
          <Image
            source={require("../../../assets/plastico.png")}
            style={styles.trashImage}
          />
        </Draggable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  frame: {
    width: 200,
    height: 200,
    borderWidth: 8,
    borderColor: "black",
    marginTop: 300,
    borderRadius: 20,
  },
  image: {
    width: 150,
    height: 150,
    resizeMode: "contain",
    marginHorizontal: 10,
  },
  frameImage:{
    width: 185,
    height: 190,
    resizeMode: "contain",
    marginTop: 18,
  },
  trashImage:{
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
  feedbackText:{
    textAlign: "center",
  },
});
