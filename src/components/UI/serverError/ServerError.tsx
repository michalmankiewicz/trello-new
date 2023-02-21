import React from 'react';
import { ServerErrorContainer, ServerErrorMessage } from './ServerError.styled';
import { WarningCircle } from 'phosphor-react';
import { useTranslation } from 'react-i18next';

type Props = {
  errorMessage: string;
};

function ServerError(props: Props) {
  const { t } = useTranslation();

  return (
    <ServerErrorContainer>
      <WarningCircle weight="bold" />
      <ServerErrorMessage>{t(props.errorMessage)}</ServerErrorMessage>
    </ServerErrorContainer>
  );
}

export default ServerError;
