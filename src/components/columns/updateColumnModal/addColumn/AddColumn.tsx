import React from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { NewColumn } from '../../../../types/columns';
import Input from '../../../input/Input';
import { ActionButton, Controls } from './AddColumn.style';

type Props = {
  onSubmitHandler: (data: NewColumn) => void;
};

function AddColumn(props: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<NewColumn>();

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
      <ActionButton type="submit">Add new column</ActionButton>
    </form>
  );
}

export default AddColumn;
