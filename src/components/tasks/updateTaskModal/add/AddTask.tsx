import React from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { NewTask } from '../../../../types/tasks';
import Input from '../../../input/Input';
import { ActionButton, Controls } from './AddTask.styled';

type Props = {
  onSubmitHandler: (data: NewTask) => void;
};

function AddTask(props: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<NewTask>();

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
      </Controls>
      <ActionButton type="submit">Add new board</ActionButton>
    </form>
  );
}

export default AddTask;
