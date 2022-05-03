import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLORS} from 'themes/colors';
import Button from 'components/Button/Button';
import {Instagram, Line, Twitter, YouTube} from 'assets/icons';
import {scale} from 'react-native-utils-scale';
import AppText from 'components/AppText';
import {TEXT_PRESETS} from 'constants/theme';

const Footer = () => {
  return (
    <View style={styles.container}>
      <View style={styles.socials}>
        <Button>
          <Twitter />
        </Button>

        <Button>
          <Instagram />
        </Button>

        <Button>
          <YouTube />
        </Button>
      </View>

      <View style={styles.spacing}>
        <Line />
      </View>

      <View style={styles.info}>
        <AppText preset={TEXT_PRESETS.BODY_LARGE}>
          support@openui.design
        </AppText>
        <AppText preset={TEXT_PRESETS.BODY_LARGE}>+60 825 876</AppText>
        <AppText preset={TEXT_PRESETS.BODY_LARGE}>
          08:00 - 22:00 - Everyday
        </AppText>
      </View>

      <View style={styles.spacing}>
        <Line />
      </View>

      <View style={styles.navigate}>
        <Button>
          <AppText preset={TEXT_PRESETS.BODY_LARGE}>About</AppText>
        </Button>

        <Button>
          <AppText preset={TEXT_PRESETS.BODY_LARGE}>Contact</AppText>
        </Button>

        <Button>
          <AppText preset={TEXT_PRESETS.BODY_LARGE}>Blog</AppText>
        </Button>
      </View>

      <View style={styles.copyRight}>
        <AppText preset={TEXT_PRESETS.BODY_SMALL}>
          Copyright© OpenUI All Rights Reserved.
        </AppText>
      </View>
    </View>
  );
};

export default Footer;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    flex: 1,
    paddingTop: scale(24),
  },
  socials: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    alignSelf: 'center',
    width: '80%',

  },
  info: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  navigate: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  copyRight: {
    height: scale(45),
    paddingHorizontal: scale(16),
    marginTop: scale(24),
    backgroundColor: '#c4c4c41a',
    alignItems: 'center',
    justifyContent: 'center',
  },
  spacing: {
    marginVertical: scale(24),
    alignItems: 'center',
    justifyContent: 'center',
  },
});
