import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://fakestoreapi.com",
  }),
  endpoints: (builder) => ({
    products: builder.query({
      query: () => "/products",
    }),
    productById: builder.query({
      query: (id) => `/products/${id}`,
    }),
  }),
});

export const { useProductsQuery, useProductByIdQuery } = productApi;
