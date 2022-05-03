import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import AppText from '../AppText';
import {TEXT_PRESETS, BUTTON_PRESETS} from 'constants/theme';
import {buttonPresets, iconPresets, textPresets} from './Presets';
import {scale} from 'react-native-utils-scale';
export default function Button({children, ...props}) {
  const {
    style: containerStyleOverride,
    textStyle: textStyleOverride,
    leftIconStyle,
    rightIconStyle,
    preset = BUTTON_PRESETS.PRIMARY,
    title = '',
    width = scale(132),
    height,
    leftIcon,
    rightIcon,
    ...rest
  } = props;

  const sizeStyle = {width, height: height && height};

  const containerStyle = [
    buttonPresets[preset],
    sizeStyle,
    containerStyleOverride,
  ];
  const textStyle = [textPresets[preset], textStyleOverride];

  if (children) {
    return (
      <TouchableOpacity style={containerStyleOverride} {...rest}>
        {children}
      </TouchableOpacity>
    );
  }

  return (
    <TouchableOpacity style={containerStyle} {...rest}>
      {leftIcon && (
        <View style={leftIconStyle}>
          {leftIcon({strokeColor: iconPresets[preset].color})}
        </View>
      )}
      <AppText preset={TEXT_PRESETS.SUB_TITLE} style={textStyle}>
        {title}
      </AppText>
      {rightIcon && (
        <View style={rightIconStyle}>
          {rightIcon({strokeColor: iconPresets[preset].color})}
        </View>
      )}
    </TouchableOpacity>
  );
}
