import { React, useState } from "react";
import { Image, ImageBackground, TouchableHighlight } from "react-native";
import { styles } from "../global/Style";

const GuideInfographic = ({ infographicReceived, onClose }) => {
  const underlayColor = "";
  const [infoGraphicKey, setInfoGraphicKey] = useState(0);

  const infographicToShow = {
    heat_infographic: [
      require("../../../assets/heat-infographic-1.png"),
      require("../../../assets/heat-infographic-2.png"),
    ],
    climate_infographic: ["", ""],
    fire_infographic: ["", ""],
    drought_infographic: ["", ""],
  };

  const handleClose = () => {
    onClose();
  };

  const handlePrev = () => {
    if (infoGraphicKey > 0) {
      setInfoGraphicKey(infoGraphicKey - 1);
    } else {
      return;
    }
  };

  const handleNext = () => {
    if (infoGraphicKey < 1) {
      setInfoGraphicKey(infoGraphicKey + 1);
    } else {
      return;
    }
  };

  return (
    <ImageBackground
      source={infographicToShow[infographicReceived][infoGraphicKey]}
      style={styles.guideInfographicStyles.container}
    >
      {/* Close button */}
      <TouchableHighlight
        testID='close-btn'
        onPress={() => handleClose()}
        underlayColor={underlayColor}
        style={styles.guideInfographicStyles.closeBtn}
      >
        <Image source={require("../../../assets/close-btn.png")} />
      </TouchableHighlight>

      {/* Next button */}
      {infoGraphicKey < 1 && (
        <TouchableHighlight
          testID='next-btn'
          onPress={() => handleNext()}
          underlayColor={underlayColor}
          style={styles.guideInfographicStyles.nextBtn}
        >
          <Image source={require("../../../assets/next-btn.png")} />
        </TouchableHighlight>
      )}

      {/* Previous button */}
      {infoGraphicKey > 0 && (
        <TouchableHighlight
          testID='pev-btn'
          onPress={() => handlePrev()}
          underlayColor={underlayColor}
          style={styles.guideInfographicStyles.prevBtn}
        >
          <Image source={require("../../../assets/prev-btn.png")} />
        </TouchableHighlight>
      )}
    </ImageBackground>
  );
};

export default GuideInfographic;
