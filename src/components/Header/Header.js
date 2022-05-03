import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {scale, width} from 'react-native-utils-scale';
import {COLORS} from 'themes/colors';
import Button from 'components/Button/Button';
import {Logo, Menu, Search, ShoppingBag} from 'assets/icons';

export default function Header() {
  return (
    <View style={styles.container}>
      <Button>
        <Menu />
      </Button>

      <Logo />

      <View style={styles.controls}>
        <Button>
          <Search />
        </Button>

        <Button>
          <ShoppingBag />
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: width,
    backgroundColor: COLORS.Header_Background,
    padding: scale(16),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  controls: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: scale(60),
  },
});
