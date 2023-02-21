import { Route, Routes } from 'react-router';
import Boards from './pages/Boards';
import Homepage from './pages/Homepage';
import NotFound from './pages/NotFound';
import { ThemeProvider } from './utils/styledCompentsUtils/styled-components';
import GlobalStyles from './GlobalStyles';
import theme from './utils/styledCompentsUtils/theme';
import Layout from './components/UI/layout/Layout';
import EditProfile from './pages/EditProfile';
import { useAppDispatch, useAppSelector } from './types/redux';
import { useGetUserQuery } from './store/auth/authApiSlice';
import { useEffect } from 'react';
import { validateUser } from './store/auth/authSlice';
import { selectIsAuth, selectUser } from './store/auth/authSelectors';
import SignUp from './pages/SignUp';
import LogIn from './pages/LogIn';
import Columns from './pages/Columns';
import LoadingOverlay from './components/UI/loadingOverlay/LoadingOverlay';
import { selectIsError } from './store/status/statusSelectors';
import ErrorOverlay from './components/UI/errorOverlay/ErrorOverlay';
import { allPendingSelector } from './api/apiSlice';

function App() {
  const user = useAppSelector(selectUser);
  const isAuth = useAppSelector(selectIsAuth);
  const globalIsLoading = useAppSelector(allPendingSelector);
  const globalIsError = useAppSelector(selectIsError);
  const dispatch = useAppDispatch();
  const { currentData, isLoading } = useGetUserQuery(user?.userId);

  useEffect(() => {
    if (currentData) {
      dispatch(validateUser());
    }
  }, [currentData, dispatch]);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {isAuth && globalIsLoading && <LoadingOverlay />}
      {isAuth && globalIsError && <ErrorOverlay />}
      <Layout isLoading={isLoading}>
        <Routes>
          <Route path="/" element={<Homepage />} />
          {!isAuth && (
            <>
              <Route path="/signup" element={<SignUp />} />
              <Route path="/login" element={<LogIn />} />
            </>
          )}
          {isAuth && (
            <>
              <Route path="/boards" element={<Boards />} />
              <Route path="/boards/:boardId" element={<Columns />} />
              <Route path="/edit-profile" element={<EditProfile />} />
            </>
          )}

          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </ThemeProvider>
  );
}

export default App;
