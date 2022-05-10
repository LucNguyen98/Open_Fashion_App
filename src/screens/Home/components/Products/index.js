import { StyleSheet, View, Animated } from "react-native";
import React from "react";
import AppText from "components/AppText";
import { TEXT_PRESETS } from "constants/theme";
import { PRODUCT_TYPE } from "constants/product_type";
import { scale } from "react-native-utils-scale";
import { Line } from "assets/icons";
import { ITEM_SIZE } from "themes/metrics";
import Item from "./Item";
import Pagination from "./Pagination";
import { useProductsQuery } from "services/api/productApi";

const Products = () => {
  const scrollX = React.useRef(new Animated.Value(0)).current;
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const { data: products } = useProductsQuery();
  const onHanleScroll = () =>
    Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }], {
      useNativeDriver: true,
    });

  const setIndex = (event) => {
    let viewSize = event.nativeEvent.layoutMeasurement.width;
    let contentOffset = event.nativeEvent.contentOffset.x;
    let carouselIndex = Math.floor(contentOffset / viewSize);

    setSelectedIndex(contentOffset === 0 ? 0 : carouselIndex + 1);
  };

  return (
    <View style={styles.container}>
      <AppText preset={TEXT_PRESETS.TITLE}>Just for You</AppText>
      <Line />
      <Animated.ScrollView
        horizontal
        pagingEnabled
        decelerationRate={0}
        scrollEventThrottle={16}
        showsHorizontalScrollIndicator={false}
        snapToInterval={ITEM_SIZE}
        style={{ marginTop: scale(20) }}
        onScroll={onHanleScroll}
        onMomentumScrollEnd={setIndex}
      >
        {products?.map((prod, index) => {
          return (
            <Item
              key={index + ""}
              type={PRODUCT_TYPE.HOME_PAGE}
              product={prod}
              style={{
                marginHorizontal: scale(8),
                width: ITEM_SIZE,
              }}
            />
          );
        })}
      </Animated.ScrollView>

      <Pagination scrollX={scrollX} data={products} selectedIndex={selectedIndex} />
    </View>
  );
};

export default Products;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginTop: scale(49),
    paddingHorizontal: scale(8),
  },
});
