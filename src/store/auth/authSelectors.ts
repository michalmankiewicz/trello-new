import { RootState } from '..';

export const selectIsAuth = (state: RootState) => state.auth.isAuth;
export const selectToken = (state: RootState) => state.auth.token;
export const selectUser = (state: RootState) => state.auth.user;

export const selectUserId = (state: RootState) => (state.auth.user ? state.auth.user.userId : '');
