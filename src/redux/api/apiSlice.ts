import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://books-catalog-server.vercel.app',
  }),
  tagTypes: ['reviews','books'],
  endpoints: () => ({}),
});