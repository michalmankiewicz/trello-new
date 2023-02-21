import React from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { NewBoard } from '../../../types/boards';
import Input from '../../input/Input';
import { ActionButton, Controls } from './AddNewBoard.styled';

type Props = {
  onSubmitHandler: (data: NewBoard) => void;
};

function AddNewBoard(props: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<NewBoard>();

  const { t } = useTranslation();

  return (
    <form onSubmit={handleSubmit(props.onSubmitHandler)}>
      <Controls>
        <Input
          label={t('boards.titleLabel')}
          type="text"
          {...register('title', { required: 'inputError.required' })}
          error={errors.title}
        />
        <Input
          label={t('boards.descriptionLabel')}
          type="text"
          {...register('description', { required: 'inputError.required' })}
          error={errors.description}
        />
      </Controls>
      <ActionButton type="submit">Add new board</ActionButton>
    </form>
  );
}

export default AddNewBoard;
