import React from 'react';
import { useTranslation } from 'react-i18next';
import { ActionButton, Question, Actions } from './DeleteBoard.styled';

type Props = {
  closeModal: () => void;
  deleteBoard: (id: string) => void;
  id: string;
};

function DeleteBoard(props: Props) {
  const { t } = useTranslation();

  return (
    <div>
      <Question>{t('boards.deleteQuestion')}</Question>
      <Actions>
        <ActionButton onClick={() => props.deleteBoard(props.id)}>
          {t('boards.delete')}
        </ActionButton>
        <ActionButton onClick={props.closeModal}>{t('boards.cancel')}</ActionButton>
      </Actions>
    </div>
  );
}

export default DeleteBoard;
