import {fontScale, scale} from 'react-native-utils-scale';

export const FONT_SIZE = {
  Title: fontScale(18),
  SubTitle: fontScale(16),
  SubTitle1: fontScale(14),
  BodyLarge: fontScale(16),
  BodyMedium: fontScale(14),
  BodySmall: fontScale(12),
};

export const LINE_HEIGHT = {
  Title: scale(40),
  SubTitle: scale(24),
  SubTitle1: scale(20),
  BodyLarge: scale(24),
  BodyMedium: scale(24),
  BodySmall: scale(18),
};

export const LETTER_SPACING = {
  Title: 4,
  SubTitle: 2,
};
