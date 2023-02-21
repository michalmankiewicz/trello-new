import { RootState } from '..';

export const selectIsError = (state: RootState) => state.status.isError;

export const selectErrorMessage = (state: RootState) => state.status.errorMessage;
