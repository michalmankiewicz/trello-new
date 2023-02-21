import { updateTypes } from '../../../types/boards';
import { NewTask } from '../../../types/tasks';
import DeleteForm from '../../modalModifiers/delete/DeleteForm';
import Modal from '../../UI/modal/Modal';
import AddTask from './add/AddTask';
import { useAddTaskMutation, useDeleteTaskMutation } from '../../../store/tasks/tasksApiSlice';
import { useAppDispatch, useAppSelector } from '../../../types/redux';
import { selectUserId } from '../../../store/auth/authSelectors';
import { setError } from '../../../store/status/statusSlice';
import { handleErrorMessage } from '../../../utils/errorUtils';

type Props = {
  type: updateTypes | undefined;
  boardId: string;
  columnId: string;
  taskId?: string;
  closeModal: () => void;
};

function UpdateTaskModal(props: Props) {
  const [addTask] = useAddTaskMutation();
  const [deleteTask] = useDeleteTaskMutation();
  const userId = useAppSelector(selectUserId);

  const dispatch = useAppDispatch();

  const deleteTaskHandler = async () => {
    try {
      await deleteTask({
        boardId: props.boardId,
        columnId: props.columnId ?? '',
        taskId: props.taskId ?? '',
      }).unwrap();
    } catch (err) {
      const errorMessage = handleErrorMessage(err);
      dispatch(setError(errorMessage));
    }
    props.closeModal();
  };

  const addTaskHandler = async (data: NewTask) => {
    try {
      await addTask({
        body: {
          ...data,
          userId: userId,
          description: 'DUMMY DESCRIPTION',
        },
        urlData: {
          boardId: props.boardId,
          columnId: props.columnId ?? '',
        },
      }).unwrap();
    } catch (err) {
      const errorMessage = handleErrorMessage(err);
      dispatch(setError(errorMessage));
    }
    props.closeModal();
  };

  let content: JSX.Element = <></>;

  if (props.type === 'delete') {
    content = <DeleteForm closeModal={props.closeModal} deleteBoard={deleteTaskHandler} />;
  } else content = <AddTask onSubmitHandler={(data: NewTask) => addTaskHandler(data)} />;

  return <Modal hideModal={props.closeModal}>{content}</Modal>;
}

export default UpdateTaskModal;
