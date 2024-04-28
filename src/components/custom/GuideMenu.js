import React from "react";
import { View, Text, Image } from "react-native";
import { styles } from "../global/Style";

const GuideMenu = () => {
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
        <View style={styles.guideMenuStyles.guideOptionTextContainer}>
          <Text style={styles.guideMenuStyles.guideOptionText}>
            ¿Cambio Climático?
          </Text>
        </View>
        <View style={styles.guideMenuStyles.guideButtons}>
          <Image source={require("../../../assets/PlanetaTermometro.png")} />
        </View>
      </View>
      {/* Opción Sequía */}
      <View style={styles.guideMenuStyles.guideOptionDroughtContainer}>
        <View style={styles.guideMenuStyles.guideOptionTextContainer}>
          <Text style={styles.guideMenuStyles.guideOptionText}>¿Sequía?</Text>
        </View>
        <View style={styles.guideMenuStyles.guideButtons}>
          <Image source={require("../../../assets/Sequia.png")} />
        </View>
      </View>
      {/* Opción Calor */}
      <View style={styles.guideMenuStyles.guideOptionHeatContainer}>
        <View style={styles.guideMenuStyles.guideOptionTextRightContainer}>
          <Text style={styles.guideMenuStyles.guideOptionText}>¿Calor?</Text>
        </View>
        <View style={styles.guideMenuStyles.guideButtonsRight}>
          <Image source={require("../../../assets/SolTermometro.png")} />
        </View>
      </View>
      {/* Opción Incendios */}
      <View style={styles.guideMenuStyles.guideOptionFireContainer}>
        <View style={styles.guideMenuStyles.guideOptionTextRightContainer}>
          <Text style={styles.guideMenuStyles.guideOptionText}>¿Incendios Forestales?</Text>
        </View>
        <View style={styles.guideMenuStyles.guideButtonsRight}>
          <Image source={require("../../../assets/Incendio.png")} />
        </View>
      </View>
    </View>
  );
};

export default GuideMenu;
