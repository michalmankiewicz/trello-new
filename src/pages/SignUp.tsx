import { useState } from 'react';
import { useCreateNewAccountMutation, useGetTokenMutation } from '../store/auth/authApiSlice';
import { handleErrorMessage } from '../utils/errorUtils';
import { SignUpData } from '../types/auth';
import SignUpForm from '../components/auth/authForm/signUp/SignUpForm';
import { logIn } from '../services/auth';
import { useNavigate } from 'react-router-dom';

function SignUp() {
  const [createNewAccount, { isError: isSignUpError, isLoading: isSignUpLoading }] =
    useCreateNewAccountMutation();
  const [getToken, { isError: isLoginError, isLoading: isLoginLoading }] = useGetTokenMutation();
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const submitFormHandler = async (data: SignUpData) => {
    try {
      const { name, login, password } = data;

      await createNewAccount({ name, login, password }).unwrap();
      const tokenData: { token: string } = await getToken({ login, password }).unwrap();

      logIn(tokenData.token);

      navigate('/boards');
    } catch (err) {
      console.error(err);
      setErrorMessage(handleErrorMessage(err));
    }
  };

  return (
    <SignUpForm
      onSubmitFormHandler={submitFormHandler}
      isLoading={isSignUpLoading || isLoginLoading}
      isError={isSignUpError || isLoginError}
      errorMessage={errorMessage}
    />
  );
}

export default SignUp;
