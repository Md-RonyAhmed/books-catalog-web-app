import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://books-catalog-server.vercel.app/api/v1',
  }),
  tagTypes: ['reviews','books'],
  endpoints: () => ({}),
});