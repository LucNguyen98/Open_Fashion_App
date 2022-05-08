import React from "react";
import { PRODUCT_TYPE } from "constants/product_type";
import Full from "./Full";
import GridView from "./GridView";
import HomePage from "./HomePage";
import ListView from "./ListView";

const Product = ({ type = PRODUCT_TYPE.LIST_VIEW, product = {}, style: styleOverride }) => {
  switch (type) {
    case PRODUCT_TYPE.FULL:
      return <Full />;

    case PRODUCT_TYPE.GRIDVIEW:
      return <GridView />;

    case PRODUCT_TYPE.HOME_PAGE:
      return <HomePage product={product} style={styleOverride} />;
    default:
      return <ListView />;
  }
};

export default Product;
