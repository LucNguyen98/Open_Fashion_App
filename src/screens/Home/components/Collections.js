import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import AppText from 'components/AppText';
import {TEXT_PRESETS} from 'constants/theme';
import {scale, width} from 'react-native-utils-scale';
import FastImage from 'react-native-fast-image';
import {CollectionBanner1, CollectionBanner2} from 'assets/images';

const Collections = () => {
  return (
    <View style={styles.container}>
      <AppText preset={TEXT_PRESETS.TITLE}>Collections</AppText>
      <FastImage
        source={CollectionBanner1}
        style={{width: width, height: scale(240), marginTop: scale(16)}}
      />
      <View style={{paddingVertical: scale(40)}}>
        <FastImage
          source={CollectionBanner2}
          style={{width: scale(260), height: scale(296)}}
          resizeMode={FastImage.resizeMode.contain}
        />
      </View>
    </View>
  );
};

export default Collections;

const styles = StyleSheet.create({
  container: {
    marginTop: scale(47),
    alignItems: 'center',
  },
});
