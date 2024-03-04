import React, { useState } from "react";
import { Text, View, Image } from "react-native";
import Draggable from "react-native-draggable";
import { styles } from "../global/Style";

export default function DragDrop() {
  const [dropped, setDropped] = useState(true);
  const [frameInX, setFrameInX] = useState("");
  const [frameInY, setFrameInY] = useState("");
  const [answerColor, setAnswerColor] = useState("rgba(132, 70, 33, 0.8)");
  const [showShovel, setShowShovel] = useState(true);
  const [showTree, setShowTree] = useState(true);
  const [showGround, setShowGround] = useState(true);
  const [showWater, setShowWater] = useState(true);
  const [order, setOrder] = useState(0);
  const [actualImage, setActualImage] = useState("");
  const images = {
    pala: require("../../../assets/pala.png"),
    arbol: require("../../../assets/arbol.png"),
    tierra: require("../../../assets/matera.png"),
    agua: require("../../../assets/agua.png"),
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
      if (id > order && id < order + 2) {
        setDropped(true);
        setAnswerColor("green");
        switch (id) {
          case 1:
            setShowShovel(false);
            setActualImage("pala");
            break;
          case 2:
            setShowTree(false);
            setActualImage("arbol");
            break;
          case 3:
            setShowGround(false);
            setActualImage("tierra");
            break;
          case 4:
            setShowWater(false);
            setActualImage("agua");
            break;
          default:
            break;
        }
        setOrder(order + 1);
        console.log(order);
        if (order >= 3) {
          console.log("Ganaste");
        }
      } else {
        setDropped(true);
        setAnswerColor("red");
        switch (id) {
          case 1:
            setShowShovel(false);
            setActualImage("pala");
            break;
          case 2:
            setShowTree(false);
            setActualImage("arbol");
            break;
          case 3:
            setShowGround(false);
            setActualImage("tierra");
            break;
          case 4:
            setShowWater(false);
            setActualImage("agua");
            break;
          default:
            break;
        }
      }
    }
  };

  return (
    <View style={styles.dragDropStyles.container}>
      {/* Instrucciones de la pregunta */}
      <Text style={styles.dragDropStyles.tittleText}>
        ARRASTRA LOS ELEMENTOS A LA ZONA INDICADA EN EL ORDEN QUE LOS
        NECESITARÍAS PARA SEMBRAR UN ÁRBOL
      </Text>
      <View style={styles.dragDropStyles.dragDropContainer}>
        {/* Aquí van las imágenes */}
        <View style={styles.dragDropStyles.imagesContainer}>
          <View style={styles.dragDropStyles.imageGroupContainer}>
            <View style={styles.dragDropStyles.imagePair}>
              {showTree && (
                <Draggable onDragRelease={(e, data) => handleDrop(e, data, 2)}>
                  <Image
                    source={require("../../../assets/arbol.png")}
                    style={styles.dragDropStyles.image}
                  />
                </Draggable>
              )}
            </View>
            <View style={styles.dragDropStyles.verticalSpace} />
            <View style={styles.dragDropStyles.imagePair}>
              {showShovel && (
                <Draggable onDragRelease={(e, data) => handleDrop(e, data, 1)}>
                  <Image
                    source={require("../../../assets/pala.png")}
                    style={styles.dragDropStyles.image}
                  />
                </Draggable>
              )}
            </View>
          </View>
          <View style={styles.dragDropStyles.space} />
          <View style={styles.dragDropStyles.imageGroupContainer}>
            <View style={styles.dragDropStyles.imagePair}>
              {showWater && (
                <Draggable onDragRelease={(e, data) => handleDrop(e, data, 4)}>
                  <Image
                    source={require("../../../assets/agua.png")}
                    style={styles.dragDropStyles.image}
                  />
                </Draggable>
              )}
            </View>
            <View style={styles.dragDropStyles.verticalSpace} />
            <View style={styles.dragDropStyles.imagePair}>
              {showGround && (
                <Draggable onDragRelease={(e, data) => handleDrop(e, data, 3)}>
                  <Image
                    source={require("../../../assets/matera.png")}
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
          {dropped && (
            <Image
              source={actualImage ? images[actualImage] : null}
              style={styles.dragDropStyles.image}
            />
          )}
        </View>
      </View>
    </View>
  );
}
