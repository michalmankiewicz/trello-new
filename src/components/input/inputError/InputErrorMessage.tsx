import React from 'react';
import { useTranslation } from 'react-i18next';
import { ErrorMessage } from './InputErrorMessage.styled';

type Props = {
  errorMessage: string;
};

function InputErrorMessage(props: Props) {
  const { t } = useTranslation();

  return <ErrorMessage>{t(props.errorMessage)}</ErrorMessage>;
}

export default InputErrorMessage;
