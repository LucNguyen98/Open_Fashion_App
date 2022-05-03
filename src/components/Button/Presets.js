import {COLORS, TEXT_COLORS} from 'themes/colors';

const BASE_BUTTON = {
  paddingVertical: 12,
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'row',
};

export const buttonPresets = {
  primary: {
    ...BASE_BUTTON,
    backgroundColor: COLORS.Title_Active,
  },
  secondary: {
    ...BASE_BUTTON,
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: COLORS.BORDER,
  },
  //   primaryDisabled: {
  //     ...BASE_BUTTON,
  //     backgroundColor: palette.disablePrimaryBlue,
  //   },
  //   disabled: {
  //     ...BASE_BUTTON,
  //     backgroundColor: palette.transparent,
  //     borderWidth: 1,
  //     borderColor: palette.alto,
  //   },
};

export const textPresets = {
  primary: {color: COLORS.Background, paddingHorizontal: 8},
  secondary: {color: TEXT_COLORS.Primary, paddingHorizontal: 8},
  //   primaryDisabled: {color: palette.white},
  //   disabled: {color: palette.grayChateau},
};

export const iconPresets = {
  primary: {color: COLORS.Off_white},
  secondary: {color: '#14142B'},
  //   primaryDisabled: {color: palette.white},
  //   disabled: {color: palette.grayChateau},
};
