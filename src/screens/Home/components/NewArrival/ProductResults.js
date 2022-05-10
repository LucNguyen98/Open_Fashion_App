import { StyleSheet, View } from "react-native";
import React from "react";
import { PRODUCT_TYPE } from "constants/product_type";
import Product from "components/Product/Product";
import { scale } from "react-native-utils-scale";

function ProductResults({ products = [] }) {
  return (
    <View style={styles.container}>
      {products.map((prod, index) => {
        return <Product key={index + ""} type={PRODUCT_TYPE.HOME_PAGE} product={prod} />;
      })}
    </View>
  );
}
export default React.memo(ProductResults);
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: scale(16),
  },
});
