import React from 'react';
import { useTranslation } from 'react-i18next';
import { ActionButton, Question, Actions } from './DeleteForm.styled';

type Props = {
  closeModal: () => void;
  deleteBoard: () => void;
};

function DeleteForm(props: Props) {
  const { t } = useTranslation();

  return (
    <div>
      <Question>{t('boards.deleteQuestion')}</Question>
      <Actions>
        <ActionButton onClick={props.deleteBoard}>{t('boards.delete')}</ActionButton>
        <ActionButton onClick={props.closeModal}>{t('boards.cancel')}</ActionButton>
      </Actions>
    </div>
  );
}

export default DeleteForm;
