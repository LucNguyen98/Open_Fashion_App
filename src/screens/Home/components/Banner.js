import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import FastImage from 'react-native-fast-image';
import {BannerHome} from 'assets/images';
import {scale} from 'react-native-utils-scale';

function Banner() {
  return (
    <View style={styles.container}>
      <FastImage
        source={BannerHome}
        resizeMode={FastImage.resizeMode.cover}
        style={{
          height: scale(600),
          width: '100%',
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default Banner
