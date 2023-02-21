import jwt_decode from 'jwt-decode';
import store from '../../store';
import { resetCredentials, setCredentials } from '../../store/auth/authSlice';
import { User } from '../../types/auth';

const setLocalStorage = (credentials: { user: User; token: string }) => {
  localStorage.setItem('token', credentials.token);
  localStorage.setItem('user', JSON.stringify(credentials.user));
};

const clearLocalStorage = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('user');
};

export const logIn = (token: string) => {
  const user: User = jwt_decode(token);
  store.dispatch(setCredentials({ token, user }));
  setLocalStorage({ token, user });
};

export const logOut = () => {
  store.dispatch(resetCredentials());
  clearLocalStorage();
};
