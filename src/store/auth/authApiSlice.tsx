import { apiSlice } from '../../api/apiSlice';
import { LogInData, SignUpData } from '../../types/auth';

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createNewAccount: builder.mutation({
      query: (data: SignUpData) => ({
        url: '/signup',
        method: 'POST',
        body: data,
      }),
    }),
    getToken: builder.mutation({
      query: (data: LogInData) => ({
        url: '/signin',
        method: 'POST',
        body: data,
      }),
    }),
    getUser: builder.query({ query: (id: string | undefined) => `/users/${id}` }),
  }),
});

export const { useCreateNewAccountMutation, useGetTokenMutation, useGetUserQuery } = authApiSlice;
