import {StyleSheet, Image, View} from 'react-native';
import React, {useState} from 'react';
import AppText from 'components/AppText';
import {TEXT_PRESETS} from 'constants/theme';
import {COLORS} from 'themes/colors';
import {fontScale, scale, width} from 'react-native-utils-scale';
import {LINE_HEIGHT} from 'themes/typography';

export default function HomePage({product}) {
  const {title, image, price} = product;
  return (
    <View style={styles.container}>
      <Image
        source={image}
        resizeMode="cover"
        style={{width: '100%', height: scale(220)}}
      />

      <View style={{paddingTop: scale(10), alignItems: 'center'}}>
        <AppText
          style={{textAlign: 'center'}}
          preset={TEXT_PRESETS.BODY_MEDIUM}>
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
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: scale(12),
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
