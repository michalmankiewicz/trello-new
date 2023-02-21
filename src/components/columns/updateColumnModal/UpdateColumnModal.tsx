import React from 'react';
import { updateTypes } from '../../../types/boards';
import DeleteForm from '../../modalModifiers/delete/DeleteForm';
import Modal from '../../UI/modal/Modal';
import {
  useAddColumnMutation,
  useDeleteColumnMutation,
} from '../../../store/columns/columnsApiSlice';
import AddColumn from './addColumn/AddColumn';
import { NewColumn } from '../../../types/columns';
import { useAppDispatch } from '../../../types/redux';
import { setError } from '../../../store/status/statusSlice';
import { handleErrorMessage } from '../../../utils/errorUtils';

type Props = {
  type: updateTypes | undefined;
  boardId: string;
  columnId?: string;
  closeModal: () => void;
};

function UpdateColumnModal(props: Props) {
  const [addColumn] = useAddColumnMutation();
  const [deleteColumn] = useDeleteColumnMutation();

  const dispatch = useAppDispatch();

  const deleteColumnHandler = async () => {
    try {
      await deleteColumn({
        boardId: props.boardId,
        columnId: props.columnId ?? '',
      }).unwrap();
    } catch (err) {
      const errorMessage = handleErrorMessage(err);
      dispatch(setError(errorMessage));
    }
    props.closeModal();
  };

  const addColumnHandler = async (data: NewColumn) => {
    try {
      await addColumn({
        boardId: props.boardId,
        body: data,
      }).unwrap();
      props.closeModal();
    } catch (err) {
      const errorMessage = handleErrorMessage(err);
      dispatch(setError(errorMessage));
    }
    props.closeModal();
  };

  let content: JSX.Element = <></>;

  if (props.type === 'delete') {
    content = <DeleteForm closeModal={props.closeModal} deleteBoard={deleteColumnHandler} />;
  } else content = <AddColumn onSubmitHandler={(data: NewColumn) => addColumnHandler(data)} />;

  return <Modal hideModal={props.closeModal}>{content}</Modal>;
}

export default UpdateColumnModal;
