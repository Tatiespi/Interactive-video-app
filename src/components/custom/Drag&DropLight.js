import React, { useState } from "react";
import { Text, View, Image } from "react-native";
import Draggable from "react-native-draggable";
import { styles } from "../global/Style";

export default function DragDropLight({ onFeedbackChange, onAnswerChange }) {
  const [dropped, setDropped] = useState(true);
  const [frameInX, setFrameInX] = useState("");
  const [frameInY, setFrameInY] = useState("");
  const [answerColor, setAnswerColor] = useState("rgba(255, 255, 255, 0.8)");
  const [showLed, setShowLed] = useState(true);
  const [showLight, setShowLight] = useState(true);
  const [actualImage, setActualImage] = useState("");
  const images = {
    bombilla: require("../../../assets/bombilla-volteada.png"),
    led: require("../../../assets/luz-led-volteada.png"),
  };

  // Ref to store the reference to draggable components
  const handleDrop = (e, data, id) => {
    const frame = this.frame;
    const framePosition =
      frame &&
      frame.measure((fx, fy, width, height, px, py) => {
        setFrameInX(px);
        setFrameInY(py);
      });
    // Obtener las coordenadas del marco
    const frameX = frameInX; // Modifica estos valores según las coordenadas de tu marco
    const frameY = frameInY; // Modifica estos valores según las coordenadas de tu marco
    const frameWidth = 200; // Modifica estos valores según el ancho de tu marco
    const frameHeight = 200; // Modifica estos valores según el alto de tu marco

    // Obtener las coordenadas donde se soltó la imagen
    const dropX = data.moveX;
    const dropY = data.moveY;

    // Verificar si las coordenadas de la imagen están dentro del marco
    if (
      dropX > frameX &&
      dropY > frameY &&
      dropX < frameX + frameWidth &&
      dropY < frameY + frameHeight
    ) {
      if (id != null) {
        if (id == 1) {
          setDropped(true);
          setAnswerColor("green");
          setShowLed(false);
          setActualImage("led");
          onFeedbackChange(true);
          onAnswerChange(true);
        } else {
          setDropped(true);
          setAnswerColor("red");
          setShowLight(false);
          setActualImage("bombilla");
          onFeedbackChange(true);
          onAnswerChange(false);
        }
      }
    }
  };
  return (
    <View style={styles.dragDropStyles.container}>
      <View style={styles.dragDropStyles.lightDragDropContainer}>
        {/* Aquí va la imagen de la bombilla normal */}
        <View style={styles.dragDropStyles.lightImagesContainer}>
          <View style={styles.dragDropStyles.imageGroupContainer}>
            <View style={styles.dragDropStyles.imagePair}>
              {showLight && (
                <Draggable
                  style={styles.dragDropStyles.dragItem}
                  onDragRelease={(e, data) => handleDrop(e, data, 2)}
                >
                  <Image
                    source={require("../../../assets/bombilla-volteada.png")}
                    style={styles.dragDropStyles.image}
                  />
                </Draggable>
              )}
            </View>
          </View>
        </View>
        {/* Aquí va el marco */}
        <View
          ref={(ref) => {
            this.frame = ref;
          }}
          style={[
            styles.dragDropStyles.lightFrame,
            { backgroundColor: answerColor },
          ]}
        >
          <Image
            source={require("../../../assets/lampara-de-techo-mono.png")}
            style={styles.dragDropStyles.lightFrameImage}
          />
          {dropped && (
            <Image
              source={actualImage ? images[actualImage] : null}
              style={styles.dragDropStyles.image}
            />
          )}
        </View>
        {/* Aqui va la bombilla led */}
        <View style={styles.dragDropStyles.imagesContainer}>
          <View style={styles.dragDropStyles.imageGroupContainer}>
            <View style={styles.dragDropStyles.imagePair}>
              {showLed && (
                <Draggable
                  style={styles.dragDropStyles.dragItem}
                  onDragRelease={(e, data) => handleDrop(e, data, 1)}
                >
                  <Image
                    source={require("../../../assets/luz-led-volteada.png")}
                    style={styles.dragDropStyles.image}
                  />
                </Draggable>
              )}
            </View>
          </View>
        </View>
      </View>
      {/* Instrucciones de la pregunta */}
      <Text style={styles.dragDropStyles.tittleText}>
        Arrastra el bombillo correcto a la zona para su instalación
      </Text>
    </View>
  );
}
