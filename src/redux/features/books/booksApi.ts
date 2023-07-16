import { api } from '@/redux/api/apiSlice';

const bookApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getBooks: builder.query({
      query: ({ limit, page }) => `/books?limit=${limit}&page=${page}`,
      providesTags: ['books'],
    }),
    getBook: builder.query({
      query: (_id) => `/books/${_id}`,
      providesTags: ['books'],
    }),
    postReview: builder.mutation({
      query: ({ id, data }) => ({
        url: `/review/${id}`,
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['reviews'],
    }),
    getReview: builder.query({
      query: (id) => `/review/${id}`,
      providesTags: ['reviews'],
    }),
  }),
});

export const {
  useGetBooksQuery,
  useGetBookQuery,
  useGetReviewQuery,
  usePostReviewMutation,
} = bookApi;
