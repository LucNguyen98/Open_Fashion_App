import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Line} from 'assets/icons';
import {Boss, Burberry, Catier, Gucci, Prada, TiffanyCo} from 'assets/images';
import FastImage from 'react-native-fast-image';
import {scale} from 'react-native-utils-scale';

const brands = [
  {image: Prada},
  {image: Burberry},
  {image: Boss},
  {image: Catier},
  {image: Gucci},
  {image: TiffanyCo},
];

const Brands = () => {
  return (
    <View style={styles.container}>
      <Line />
      <View style={styles.wrapper}>
        {brands.map((brand, index) => (
          <FastImage
            key={index + ''}
            source={brand.image}
            style={styles.image}
            resizeMode={FastImage.resizeMode.contain}
          />
        ))}
      </View>
      <Line />
    </View>
  );
};

export default Brands;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: scale(16),
  },
  wrapper: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginVertical: scale(24),
  },
  image: {
    width: scale(72),
    height: scale(20),
    marginTop: scale(35),
    paddingHorizontal: scale(45),
  },
});
