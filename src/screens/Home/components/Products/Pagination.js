import {StyleSheet, Animated, View} from 'react-native';
import React from 'react';
import {DotRectangle} from 'assets/icons';
import {scale} from 'react-native-utils-scale';
import {COLORS} from 'themes/colors';

export default function Pagination({data = [], selectedIndex}) {
  return (
    <View style={styles.container}>
      {data.map((item, index) => {
        return (
          <Animated.View
            key={index + ''}
            style={{
              marginHorizontal: scale(5),
            }}>
            <DotRectangle
              width={10}
              height={10}
              color={
                index === selectedIndex ? COLORS.Primary : COLORS.Placeholder
              }
            />
          </Animated.View>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
