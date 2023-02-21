import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

type StatusSliceType = {
  isError: boolean;
  errorMessage: string;
};

const initialStatusState: StatusSliceType = {
  isError: false,
  errorMessage: '',
};

const statusSlice = createSlice({
  name: 'status',
  initialState: initialStatusState,
  reducers: {
    setError: (state, action: PayloadAction<string>) => {
      state.isError = true;
      state.errorMessage = action.payload;
    },
    resetError: (state) => {
      state.isError = false;
      state.errorMessage = '';
    },
  },
});

export const { setError, resetError } = statusSlice.actions;
export default statusSlice.reducer;
