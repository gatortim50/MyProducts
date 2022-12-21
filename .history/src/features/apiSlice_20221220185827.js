/* React-specific entry point that automatically generates
hooks corresponding to the defined endpoints */
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

cexport const productsApi = createApi({
  reducerPath: "productsApi"
})