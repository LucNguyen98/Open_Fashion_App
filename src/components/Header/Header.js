import {StyleSheet, View} from 'react-native';
import React from 'react';
import {hasNotch, scale, width} from 'react-native-utils-scale';
import Button from 'components/Button/Button';
import {Logo, Menu, Search, ShoppingBag} from 'assets/icons';

export default function Header({style: styleOverride}) {
  return (
    <View style={[styles.container, styleOverride]}>
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
    backgroundColor: '#E7EAEF',
    padding: scale(16),
    paddingTop: hasNotch ? scale(40) : scale(20),
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
