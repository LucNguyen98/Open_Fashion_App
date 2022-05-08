import { StyleSheet, Image, View } from "react-native";
import React from "react";
import AppText from "components/AppText";
import { TEXT_PRESETS } from "constants/theme";
import { COLORS } from "themes/colors";
import { fontScale, scale, width } from "react-native-utils-scale";
import { LINE_HEIGHT } from "themes/typography";

export default function Item({ product, style: styleOverride }) {
  const { title, image, price } = product;
  return (
    <View style={[styles.container, styleOverride]}>
      <Image source={image} resizeMode="stretch" style={{ width: "100%", height: scale(312) }} />

      <View style={styles.contentContainer}>
        <AppText style={{ textAlign: "center" }} preset={TEXT_PRESETS.BODY_MEDIUM}>
          <AppText preset={TEXT_PRESETS.SMALL_TITLE}>{title}</AppText>
          Recycle Boucle Knit Cardigan Pink
        </AppText>

        <AppText style={styles.txtPrice}>${price}</AppText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: width * 0.5 - scale(24),
    alignItems: "center",
    justifyContent: "center",
    marginBottom: scale(12),
  },
  txtPrice: {
    color: COLORS.Primary,
    fontSize: fontScale(15),
    lineHeight: LINE_HEIGHT.SubTitle,
  },

  heartContainer: {
    position: "absolute",
    right: scale(8),
    bottom: scale(8),
  },
  contentContainer: {
    paddingTop: scale(10),
    paddingHorizontal: scale(10),
    alignItems: "center",
  },
});
