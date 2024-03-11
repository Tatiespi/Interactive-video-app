import React, { useState } from "react";
import { Text, View, Image } from "react-native";
import Draggable from "react-native-draggable";
import { styles } from "../global/Style";

export default function DragDropLight({ onFeedbackChange, onAnswerChange }) {
  const [dropped, setDropped] = useState(true);
  const [frameInX, setFrameInX] = useState("");
  const [frameInY, setFrameInY] = useState("");
  const [answerColor, setAnswerColor] = useState("rgba(132, 70, 33, 0.8)");
  const [showLed, setShowLed] = useState(true);
  const [showLight, setShowLight] = useState(true);
  const [showGround, setShowGround] = useState(true);
  const [showWater, setShowWater] = useState(true);
  const [order, setOrder] = useState(0);
  const [actualImage, setActualImage] = useState("");
  const images = {
    bombilla: require("../../../assets/bombilla.png"),
    led: require("../../../assets/bombillaled.png"),
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
      {/* Instrucciones de la pregunta */}
      <Text style={styles.dragDropStyles.tittleText}>
        CAMBIA LA BOMBILLA VIEJA POR UNA BOMBILLA LED PARA AHORRAR ENERGÍA Y
        AYUDAR AL MEDIO AMBIENTE
      </Text>
      <View style={styles.dragDropStyles.dragDropContainer}>
        {/* Aquí van las imágenes */}
        <View style={styles.dragDropStyles.imagesContainer}>
          <View style={styles.dragDropStyles.imageGroupContainer}>
            <View style={styles.dragDropStyles.imagePair}>
              {showLight && (
                <Draggable onDragRelease={(e, data) => handleDrop(e, data, 2)}>
                  <Image
                    source={require("../../../assets/bombilla.png")}
                    style={styles.dragDropStyles.image}
                  />
                </Draggable>
              )}
            </View>
            <View style={styles.dragDropStyles.verticalSpace} />
            <View style={styles.dragDropStyles.imagePair}>
              {showLed && (
                <Draggable onDragRelease={(e, data) => handleDrop(e, data, 1)}>
                  <Image
                    source={require("../../../assets/bombillaled.png")}
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
            styles.dragDropStyles.frame,
            { backgroundColor: answerColor },
          ]}
        >
          <Draggable>
            <Image
              style={styles.dragDropStyles.image}
              source={require("../../../assets/bombilladañada.png")}
            />
          </Draggable>
          {dropped && (
            <Image
              source={actualImage ? images[actualImage] : null}
              style={styles.dragDropStyles.image}
            />
          )}
        </View>
        {/* Aqui va la papelera */}
        <View>
          <Image
            style={styles.dragDropStyles.image}
            source={require("../../../assets/papelera.png")}
          />
        </View>
      </View>
    </View>
  );
}
