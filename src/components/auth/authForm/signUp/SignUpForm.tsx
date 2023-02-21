import { Link } from 'react-router-dom';
import Input from '../../../input/Input';
import {
  AuthContainer,
  Controls,
  AuthSubmitButton,
  Title,
  ToggleParagraph,
} from '../AuthForm.styled';
import { useTranslation, Trans } from 'react-i18next';
import { validationObj } from '../../../../utils/authUtils';
import { useForm } from 'react-hook-form';
import { Spinner } from 'phosphor-react';
import { SignUpData } from '../../../../types/auth';
import ServerError from '../../../UI/serverError/ServerError';

type Props = {
  onSubmitFormHandler: (data: SignUpData) => void;
  isError: boolean;
  isLoading: boolean;
  errorMessage: string;
};

function SignUpForm(props: Props) {
  const { t } = useTranslation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpData>();

  return (
    <AuthContainer onSubmit={handleSubmit(props.onSubmitFormHandler)}>
      <Title>{t(`signUp.title`)} </Title>
      {props.isError && <ServerError errorMessage={props.errorMessage} />}
      <Controls>
        <Input
          {...register('name', validationObj)}
          error={errors.name}
          type="text"
          label={t('signUp.name')}
        />
        <Input
          {...register('login', validationObj)}
          error={errors.login}
          type="text"
          label="Login"
        />
        <Input
          {...register('password', validationObj)}
          error={errors.password}
          type="password"
          label={t('signUp.password')}
        />
      </Controls>

      {props.isLoading ? (
        <AuthSubmitButton disabled>
          <Spinner weight="bold" />
        </AuthSubmitButton>
      ) : (
        <AuthSubmitButton>{t(`signUp.title`)}</AuthSubmitButton>
      )}
      <ToggleParagraph>
        <Trans i18nKey={`signUp.toggleText`}>
          Don&apos;t have account yet?&nbsp;
          <Link to="/login">Register</Link>
        </Trans>
      </ToggleParagraph>
    </AuthContainer>
  );
}

export default SignUpForm;
