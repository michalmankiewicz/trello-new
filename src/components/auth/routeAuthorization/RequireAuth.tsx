import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { useAppSelector } from '../../../types/redux';
import { Navigate } from 'react-router-dom';
import { selectIsAuth } from '../../../store/auth/authSelectors';

function RequireAuth() {
  const isAuth = useAppSelector(selectIsAuth);
  const location = useLocation();

  return isAuth ? <Outlet /> : <Navigate to="/login" state={{ from: location }} replace />;
}

export default RequireAuth;
