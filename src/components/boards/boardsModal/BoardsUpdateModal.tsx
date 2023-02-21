import {
  useAddBoardMutation,
  useDeleteBoardMutation,
  useEditBoardMutation,
} from '../../../store/boards/boardsApiSlice';
import { Board, NewBoard, updateTypes, UPDATE_TYPES } from '../../../types/boards';
import Modal from '../../UI/modal/Modal';
import AddNewBoard from '../addNewBoard/AddNewBoard';
import EditBoard from '../editBoard/EditBoard';
import { handleErrorMessage } from '../../../utils/errorUtils';
import { useAppDispatch } from '../../../types/redux';
import { setError } from '../../../store/status/statusSlice';
import DeleteForm from '../../modalModifiers/delete/DeleteForm';

type Props = {
  type: updateTypes | undefined;
  boardData: Board | undefined;
  closeModal: () => void;
};

function BoardsModal(props: Props) {
  const [addBoard] = useAddBoardMutation();
  const [deleteBoard] = useDeleteBoardMutation();
  const [editBoard] = useEditBoardMutation();

  const dispatch = useAppDispatch();

  const addNewBoardHandler = async (data: NewBoard) => {
    try {
      await addBoard(data).unwrap();
    } catch (err) {
      console.error(err);
      const errorMessage = handleErrorMessage(err);
      dispatch(setError(errorMessage));
    }
    props.closeModal();
  };

  const deleteBoardHandler = async () => {
    try {
      await deleteBoard(props.boardData?.id ?? '').unwrap();
    } catch (err) {
      console.error(err);
      const errorMessage = handleErrorMessage(err);
      dispatch(setError(errorMessage));
    }
    props.closeModal();
  };

  const editBoardHandler = async (data: Board) => {
    try {
      await editBoard(data).unwrap();
    } catch (err) {
      console.error(err);
      const errorMessage = handleErrorMessage(err);
      dispatch(setError(errorMessage));
    }
    props.closeModal();
  };

  let content: JSX.Element = <></>;

  if (props.type === UPDATE_TYPES.add)
    content = <AddNewBoard onSubmitHandler={addNewBoardHandler} />;
  else if (props.type === UPDATE_TYPES.delete && props.boardData && props.boardData.id)
    content = <DeleteForm closeModal={props.closeModal} deleteBoard={deleteBoardHandler} />;
  else if (props.type === UPDATE_TYPES.edit && props.boardData)
    content = <EditBoard onSubmitHandler={editBoardHandler} boardData={props.boardData} />;

  return <Modal hideModal={props.closeModal}>{content}</Modal>;
}

export default BoardsModal;
