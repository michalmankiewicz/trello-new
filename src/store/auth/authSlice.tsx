import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { User } from '../../types/auth';

type AuthSliceType = {
  token: string;
  isAuth: boolean;
  user: User;
};

const initialAuthState: AuthSliceType = {
  token: localStorage.getItem('token') ?? '',
  isAuth: false,
  user: JSON.parse(localStorage.getItem('user') || '{}'),
};

const authSlice = createSlice({
  name: 'auth',
  initialState: initialAuthState,
  reducers: {
    setCredentials: (state, action: PayloadAction<{ token: string; user: User }>) => {
      state.isAuth = true;
      state.token = action.payload.token;
      state.user = action.payload.user;
    },
    resetCredentials: (state) => {
      state.isAuth = false;
      state.token = '';
      state.user = null;
    },
    validateUser: (state) => {
      state.isAuth = true;
    },
  },
});

export const { setCredentials, resetCredentials, validateUser } = authSlice.actions;
export default authSlice.reducer;
