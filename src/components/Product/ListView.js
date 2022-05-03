import {StyleSheet, Image, View} from 'react-native';
import React from 'react';
import AppText from 'components/AppText';
import {TEXT_PRESETS} from 'constants/theme';
import {COLORS} from 'themes/colors';
import {fontScale, scale} from 'react-native-utils-scale';
import {LINE_HEIGHT} from 'themes/typography';
import Button from 'components/Button/Button';
import {Heart, Star} from 'assets/icons';
import {Product1} from 'assets/images';

export default function ListView() {
  const renderOptionSize = () => {
    return (
      <View style={styles.row}>
        <AppText preset={TEXT_PRESETS.BODY_SMALL}>Size</AppText>
        <View style={[{flexWrap: 'wrap', marginLeft: scale(6)}, styles.row]}>
          {['S', 'M', 'L'].map((item, index) => {
            return (
              <Button key={index + ''} style={styles.size}>
                <AppText preset={TEXT_PRESETS.BODY_SMALL}>{item}</AppText>
              </Button>
            );
          })}
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={{flex: 0.3}}>
        <Image source={Product1} resizeMode="stretch" style={{flex: 1}} />
      </View>

      <View style={{paddingTop: scale(10), flex: 0.7}}>
        <AppText preset={TEXT_PRESETS.SMALL_TITLE}>lamerei</AppText>
        <AppText preset={TEXT_PRESETS.BODY_MEDIUM}>
          Recycle Boucle Knit Cardigan Pink
        </AppText>

        <AppText style={styles.txtPrice}>$120</AppText>

        <View style={styles.ratingContainer}>
          <Star />
          <AppText preset={TEXT_PRESETS.BODY_SMALL} style={{marginLeft: 3}}>
            4.8 Ratings
          </AppText>
        </View>

        <View>{renderOptionSize()}</View>

        <Button style={styles.heartContainer}>
          <Heart strokeColor={COLORS.Primary} />
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  txtPrice: {
    color: COLORS.Primary,
    fontSize: fontScale(15),
    lineHeight: LINE_HEIGHT.SubTitle,
  },

  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: scale(11),
  },

  heartContainer: {
    position: 'absolute',
    right: scale(15),
    bottom: scale(10),
  },

  size: {
    width: scale(24),
    height: scale(24),
    borderRadius: scale(24) / 2,
    borderWidth: 1,
    borderColor: COLORS.BORDER,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: scale(6),
  },
});
