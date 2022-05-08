import { Text } from "react-native";
import React from "react";
import { FONT_SIZE, LETTER_SPACING, LINE_HEIGHT } from "typography";
import { TEXT_COLORS } from "colors";
import { TEXT_PRESETS } from "constants/theme";
import { fontScale } from "react-native-utils-scale";
const BASE_TEXT = {
  fontSize: fontScale(14),
  fontFamily: "Tenor Sans",
  color: TEXT_COLORS.Primary,
};

export const presets = {
  default: BASE_TEXT,
  bold: {
    ...BASE_TEXT,
    fontWeight: "700",
  },

  title: {
    ...BASE_TEXT,
    fontSize: FONT_SIZE.Title,
    lineHeight: LINE_HEIGHT.Title,
    letterSpacing: LETTER_SPACING.Title,
    textTransform: "uppercase",
  },

  subTitle: {
    ...BASE_TEXT,
    fontSize: FONT_SIZE.SubTitle,
    lineHeight: LINE_HEIGHT.SubTitle,
    letterSpacing: LETTER_SPACING.SubTitle,
    textTransform: "uppercase",
  },

  smallTitle: {
    ...BASE_TEXT,
    fontSize: FONT_SIZE.SubTitle1,
    lineHeight: LINE_HEIGHT.SubTitle1,
    letterSpacing: LETTER_SPACING.SubTitle,
    textTransform: "uppercase",
  },

  bodyLarge: {
    ...BASE_TEXT,
    fontSize: FONT_SIZE.BodyLarge,
    lineHeight: LINE_HEIGHT.BodyLarge,
    color: TEXT_COLORS.Secondary,
  },

  bodyMedium: {
    ...BASE_TEXT,
    fontSize: FONT_SIZE.BodyMedium,
    lineHeight: LINE_HEIGHT.BodyMedium,
    color: TEXT_COLORS.Secondary,
  },

  bodySmall: {
    ...BASE_TEXT,
    fontSize: FONT_SIZE.BodySmall,
    lineHeight: LINE_HEIGHT.BodySmall,
    color: TEXT_COLORS.Secondary,
  },
};

const AppText = ({ children, ...props }) => {
  const { preset = TEXT_PRESETS.DEFAULT, style: styleOverride, ...rest } = props;
  return (
    <Text style={[presets[preset], styleOverride]} {...rest}>
      {children}
    </Text>
  );
};

export default AppText;
