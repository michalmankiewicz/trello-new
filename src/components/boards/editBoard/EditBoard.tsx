import React from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { Board, NewBoard } from '../../../types/boards';
import Input from '../../input/Input';
import { ActionButton, Controls } from './EditBoard.styled';

type Props = {
  onSubmitHandler: (data: Board) => void;
  boardData: Board;
};

function EditBoard(props: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<NewBoard>();

  const submitFormHandler = (data: NewBoard) => {
    props.onSubmitHandler({
      id: props.boardData.id,
      ...data,
    });
  };

  const { t } = useTranslation();

  return (
    <form onSubmit={handleSubmit(submitFormHandler)}>
      <Controls>
        <Input
          label={t('boards.titleLabel')}
          type="text"
          {...register('title', { required: 'inputError.required' })}
          error={errors.title}
          defaultValue={props.boardData.title}
        />
        <Input
          label={t('boards.descriptionLabel')}
          type="text"
          {...register('description', { required: 'inputError.required' })}
          error={errors.description}
          defaultValue={props.boardData.description}
        />
      </Controls>
      <ActionButton type="submit">Edit board</ActionButton>
    </form>
  );
}

export default EditBoard;
