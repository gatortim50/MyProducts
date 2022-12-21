/* React-specific entry point that automatically generates
hooks corresponding to the defined endpoints */
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({baseUrl: "https://dummyjson.com/"}),
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () => "products",
    }),
    getProduct: builder.query({
      query: (product) => `products/search/q=${product}`,
    }),
  }),
});

export const { useGetAllProductsQuery, useGet } = productsApi