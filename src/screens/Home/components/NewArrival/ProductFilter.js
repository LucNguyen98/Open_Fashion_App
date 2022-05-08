import { StyleSheet, ScrollView, View, Animated } from "react-native";
import React from "react";
import AppText from "components/AppText";
import { TEXT_PRESETS } from "constants/theme";
import Button from "components/Button/Button";
import { DotRectangle } from "assets/icons";
import { TEXT_COLORS } from "themes/colors";

export function useSpring(value, config = {}) {
  const animatedValue = React.useMemo(() => new Animated.Value(value), []);
  React.useEffect(() => {
    const animation = Animated.timing(animatedValue, {
      ...config,
      duration: 300,
      toValue: value,
      useNativeDriver: true,
    });
    animation.start();
    return () => animation.stop();
  }, [value]);
  return animatedValue;
}

const Item = ({ item, selectedTab, onChangeTab }) => {
  const isAcive = selectedTab === item;
  const animation = useSpring(Number(isAcive));

  let positionX = React.useRef(0);

  const iconTranslate = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [positionX.current, positionX.current / 2],
  });
  const iconVisibility = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1],
  });

  return (
    <Button
      onPress={() => {
        onChangeTab(item);
      }}
    >
      <View style={styles.tab} onLayout={(evt) => (positionX.current = evt.nativeEvent.layout.x)}>
        <AppText
          preset={TEXT_PRESETS.BODY_MEDIUM}
          style={{
            color: isAcive ? TEXT_COLORS.Active : TEXT_COLORS.Secondary,
          }}
        >
          {item}
        </AppText>
        <Animated.View
          style={{
            opacity: iconVisibility,
            transform: [{ translateX: iconTranslate }],
          }}
        >
          <DotRectangle />
        </Animated.View>
      </View>
    </Button>
  );
};

function ProductFilter({ data = [], selectedTab, onChangeTab }) {
  return (
    <ScrollView
      horizontal
      alwaysBounceHorizontal={false}
      alwaysBounceVertical={false}
      contentContainerStyle={styles.scrollView}
    >
      {data.map((item, index) => (
        <Item
          key={index + ""}
          item={item}
          selectedTab={selectedTab}
          index={index}
          onChangeTab={onChangeTab}
        />
      ))}
    </ScrollView>
  );
}

export default React.memo(ProductFilter);

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    justifyContent: "space-evenly",
  },
  tab: {
    alignItems: "center",
    justifyContent: "center",
  },
});
