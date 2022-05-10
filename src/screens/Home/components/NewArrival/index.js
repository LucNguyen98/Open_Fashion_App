import { StyleSheet, View, SafeAreaView } from "react-native";
import React, { useEffect, useState } from "react";
import AppText from "components/AppText";
import { BUTTON_PRESETS, TEXT_PRESETS } from "constants/theme";
import { ForwardArrow, Line } from "assets/icons";
import ProductFilter from "./ProductFilter";
import { scale } from "react-native-utils-scale";
import ProductResults from "./ProductResults";
import Button from "components/Button/Button";
import { useLazyProductByCategoryQuery, useCategoriesQuery } from "services/api/productApi";

const NewArrival = () => {
  const { data: category = [] } = useCategoriesQuery();
  const [getProducts, { data: products = [] }] = useLazyProductByCategoryQuery();
  const [selectedTab, setTab] = useState("");
  useEffect(() => {
    if (category?.length > 0) {
      setTab(category[0]);
    }
  }, [category]);

  useEffect(() => {
    getProducts(selectedTab);
  }, [selectedTab]);

  return (
    <SafeAreaView forceInset={{ top: "never" }} style={styles.container}>
      <View
        style={{
          marginVertical: scale(16),
        }}
      >
        <AppText preset={TEXT_PRESETS.TITLE}>New Arrival</AppText>
        <Line />
      </View>

      <ProductFilter data={category} selectedTab={selectedTab} onChangeTab={setTab} />
      <ProductResults products={products} />

      <Button
        preset={BUTTON_PRESETS.SECONDARY}
        title="Explore More"
        rightIcon={ForwardArrow}
        style={styles.btnContainer}
        textStyle={{
          textTransform: "capitalize",
        }}
      />
    </SafeAreaView>
  );
};

export default React.memo(NewArrival);

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1,
    marginTop: scale(27),
    paddingHorizontal: scale(16),
  },
  btnContainer: {
    width: scale(155),
    borderWidth: 0,
    marginVertical: scale(24),
  },
});
