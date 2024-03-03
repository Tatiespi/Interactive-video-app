import React, { useState } from "react";
import { Text, View, Image } from "react-native";
import Draggable from "react-native-draggable";
import { styles } from "../global/Style";

export default function DragDrop() {
  const [dropped, setDropped] = useState(false);
  const [correctImageId, setCorrectImageId] = useState(1);
  // Ref to store the reference to draggable components
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
    const frameX = 239; // Modifica estos valores según las coordenadas de tu marco
    const frameY = 86; // Modifica estos valores según las coordenadas de tu marco
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
    <View style={styles.dragDropStyles.container}>
      {/* Aquí va el marco */}
      <View
        ref={(ref) => {
          this.frame = ref;
        }}
        style={styles.dragDropStyles.frame}
      >
        {dropped ? (
          <Text style={styles.dragDropStyles.feedbackText}>
            Imagen correcta
          </Text>
        ) : (
          <Text style={styles.dragDropStyles.feedbackText}>
            Imagen incorrecta
          </Text>
        )}
        <Image
          source={require("../../../assets/suelo.png")}
          style={styles.dragDropStyles.frameImage}
        />
      </View>
      {/* Aquí van las imágenes */}
      <View style={styles.dragDropStyles.imagesContainer}>
        <Draggable onDragRelease={(e, data) => handleDrop(e, data, 1)}>
          <Image
            source={require("../../../assets/arbol.png")}
            style={styles.dragDropStyles.image}
          />
        </Draggable>
        <Draggable onDragRelease={(e, data) => handleDrop(e, data, 2)}>
          <Image
            source={require("../../../assets/papel.png")}
            style={styles.dragDropStyles.trashImage}
          />
        </Draggable>
        <Draggable onDragRelease={(e, data) => handleDrop(e, data, 3)}>
          <Image
            source={require("../../../assets/plastico.png")}
            style={styles.dragDropStyles.trashImage}
          />
        </Draggable>
      </View>
    </View>
  );
}
