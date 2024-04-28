import { React, useState } from "react";
import { View, Text, Image, TouchableHighlight } from "react-native";
import GuideInfographic from "./GuideInfographic";
import { styles } from "../global/Style";

const GuideMenu = () => {
  const underlayColor = "#689702";
  const [showInfoGraphic, setShowInfoGraphic] = useState(false);
  const [infoGraphic, setInfoGraphic] = useState("");
  const [infoGraphicKey, setInfoGraphicKey] = useState(0);

  const handleSelection = (infographicSelected) => {
    setInfoGraphic(infographicSelected);
    setShowInfoGraphic(!showInfoGraphic);
  };

  const handleClose = () => {
    setShowInfoGraphic(!showInfoGraphic);
  };
  return (
    <View style={styles.guideMenuStyles.container}>
      {/* Logo Principal */}
      <View style={styles.guideMenuStyles.guideMenuContainer}>
        <Image
          style={styles.guideMenuStyles.guiaLogoImage}
          source={require("../../../assets/LogoGuia.png")}
        />
      </View>
      {/* Opción Cambio Climático */}
      <View style={styles.guideMenuStyles.guideOptionClimateContainer}>
        <TouchableHighlight
          testID='climate-btn'
          onPress={() => handleSelection("climate_infographic")}
          style={styles.guideMenuStyles.guideOptionTextContainer}
          underlayColor={underlayColor}
        >
          <Text style={styles.guideMenuStyles.guideOptionText}>
            ¿Cambio Climático?
          </Text>
        </TouchableHighlight>
        <View style={styles.guideMenuStyles.guideButtons}>
          <Image source={require("../../../assets/PlanetaTermometro.png")} />
        </View>
      </View>
      {/* Opción Sequía */}
      <View style={styles.guideMenuStyles.guideOptionDroughtContainer}>
        <TouchableHighlight
          testID='drought-btn'
          onPress={() => handleSelection("drought_infographic")}
          style={styles.guideMenuStyles.guideOptionTextContainer}
          underlayColor={underlayColor}
        >
          <Text style={styles.guideMenuStyles.guideOptionText}>¿Sequía?</Text>
        </TouchableHighlight>
        <View style={styles.guideMenuStyles.guideButtons}>
          <Image source={require("../../../assets/Sequia.png")} />
        </View>
      </View>
      {/* Opción Calor */}
      <View style={styles.guideMenuStyles.guideOptionHeatContainer}>
        <TouchableHighlight
          testID='heat-btn'
          onPress={() => handleSelection("heat_infographic")}
          style={styles.guideMenuStyles.guideOptionTextRightContainer}
          underlayColor={underlayColor}
        >
          <Text style={styles.guideMenuStyles.guideOptionText}>¿Calor?</Text>
        </TouchableHighlight>
        <View style={styles.guideMenuStyles.guideButtonsRight}>
          <Image source={require("../../../assets/SolTermometro.png")} />
        </View>
      </View>
      {/* Opción Incendios */}
      <View style={styles.guideMenuStyles.guideOptionFireContainer}>
        <TouchableHighlight
          testID='fire-btn'
          onPress={() => handleSelection("fire_infographic")}
          style={styles.guideMenuStyles.guideOptionTextRightContainer}
          underlayColor={underlayColor}
        >
          <Text style={styles.guideMenuStyles.guideOptionText}>
            ¿Incendios Forestales?
          </Text>
        </TouchableHighlight>
        <View style={styles.guideMenuStyles.guideButtonsRight}>
          <Image source={require("../../../assets/Incendio.png")} />
        </View>
      </View>
      {showInfoGraphic && (
        <GuideInfographic
          infographicReceived={infoGraphic}
          onClose={() => handleClose()}
        ></GuideInfographic>
      )}
    </View>
  );
};

export default GuideMenu;
