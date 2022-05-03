import {StyleSheet, Image, View} from 'react-native';
import React, {useState} from 'react';
import AppText from 'components/AppText';
import {TEXT_PRESETS} from 'constants/theme';
import {COLORS} from 'themes/colors';
import {fontScale, scale} from 'react-native-utils-scale';
import {LINE_HEIGHT} from 'themes/typography';
import Button from 'components/Button/Button';
import {Heart} from 'assets/icons';
import {Product1} from 'assets/images';

export default function HomePage() {
  return (
    <View style={styles.container}>
      <Image
        source={Product1}
        resizeMode="cover"
        style={{width: '100%', height: scale(220)}}
      />

      <View style={{paddingTop: scale(10)}}>
        <AppText preset={TEXT_PRESETS.BODY_MEDIUM}>
          <AppText preset={TEXT_PRESETS.SMALL_TITLE}>21WN</AppText>
          Recycle Boucle Knit Cardigan Pink
        </AppText>

        <AppText style={styles.txtPrice}>$120</AppText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: scale(165),
    alignItems: 'center',
    justifyContent: 'center',
  },
  txtPrice: {
    color: COLORS.Primary,
    fontSize: fontScale(15),
    lineHeight: LINE_HEIGHT.SubTitle,
  },

  heartContainer: {
    position: 'absolute',
    right: scale(8),
    bottom: scale(8),
  },
});
