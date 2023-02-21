import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { RootState } from '../store';

const baseQuery = fetchBaseQuery({
  baseUrl: process.env.REACT_APP_API_URL,
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as RootState).auth.token;

    if (token) {
      headers.set('authorization', `Bearer ${token}`);
    }
    return headers;
  },
});

export const apiSlice = createApi({
  baseQuery: baseQuery,
  tagTypes: ['Boards', 'Columns', 'Tasks'],
  endpoints: () => ({}),
});

export const allPendingSelector = (state: RootState) =>
  Object.values(state.api.queries).some((query) => query!.status === 'pending') ||
  Object.values(state.api.mutations).some(
    (query) =>
      query!.status === 'pending' &&
      query!.endpointName !== 'editTask' &&
      query!.endpointName !== 'editColumn'
  );

// checking if editTask and editColumn to prevent loading spinner to appear during optimistic request
