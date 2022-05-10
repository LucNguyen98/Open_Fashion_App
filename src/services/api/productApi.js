import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const queryString = require("query-string");

const defaultFilters = {
  sort: "desc",
  limit: 6,
};
export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://fakestoreapi.com",
    paramsSerializer: (params) => queryString.stringify(params),
  }),
  endpoints: (builder) => ({
    products: builder.query({
      query: () => ({ url: "/products", params: defaultFilters }),
    }),
    productById: builder.query({
      query: (params) => ({
        url: "/products",
        params,
      }),
    }),

    categories: builder.query({
      query: () => "/products/categories",
    }),

    productByCategory: builder.query({
      query: (categoryName, params = {}) => ({
        url: `/products/category/${categoryName}`,
        params: { ...defaultFilters, params },
      }),
    }),
  }),
});

export const {
  useProductsQuery,
  useProductByIdQuery,
  useCategoriesQuery,
  useProductByCategoryQuery,
  useLazyProductByCategoryQuery,
} = productApi;
