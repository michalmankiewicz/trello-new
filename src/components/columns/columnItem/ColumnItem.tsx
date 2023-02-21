import { useSortable } from '@dnd-kit/sortable';
import { Trash } from 'phosphor-react';
import React, { Dispatch, useRef } from 'react';
import { useEditColumnMutation } from '../../../store/columns/columnsApiSlice';
import { setError } from '../../../store/status/statusSlice';
import { useAppDispatch } from '../../../types/redux';
import { Task } from '../../../types/tasks';
import { handleErrorMessage } from '../../../utils/errorUtils';
import TaskList from '../../tasks/taskList/TaskList';
import { ColumnContainer, Actions, Title, ActionButton, Input } from './ColumnItem.styled';
import { CSS } from '@dnd-kit/utilities';

type Props = {
  title: string;
  boardId: string;
  id: string;
  order: number;
  tasks: Task[];
  onDeleteColumn: () => void;
  isColumnEditing: string | null;
  toggleEditing: (id: string | null) => void;
};

function ColumnItem(props: Props) {
  const { attributes, listeners, setNodeRef, transform, transition, over, active } = useSortable({
    id: props.id,
    data: {
      type: 'column',
      order: props.order,
    },
  });

  const isTaskOverContainer =
    (over?.data?.current?.columnId === props.id || over?.id === props.id) &&
    active?.data?.current?.type === 'task';

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  const dispatch = useAppDispatch();
  const [editColumn] = useEditColumnMutation();

  const inputRef = useRef<HTMLInputElement>(null);

  const editHandler = async (e: React.FormEvent) => {
    e.preventDefault();
    const value = inputRef.current?.value;
    if (!value || value.trim() === '' || value.trim().length > 10) return;

    const body = {
      title: value,
      order: props.order,
    };

    try {
      await editColumn({
        body,
        boardId: props.boardId,
        columnId: props.id,
      }).unwrap();
    } catch (err) {
      const errorMessage = handleErrorMessage(err);
      dispatch(setError(errorMessage));
    }
    props.toggleEditing(null);
  };

  return (
    <ColumnContainer
      isTaskOverContainer={isTaskOverContainer}
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
    >
      <Actions>
        {props.isColumnEditing === props.id ? (
          <form onSubmit={editHandler}>
            <Input
              type="text"
              autoFocus={true}
              ref={inputRef}
              defaultValue={props.title}
              onBlur={() => props.toggleEditing(null)}
            />
          </form>
        ) : (
          <Title
            onClick={() => {
              props.toggleEditing(props.id);
            }}
          >
            {props.title}
          </Title>
        )}
        <ActionButton onClick={props.onDeleteColumn}>
          <Trash />
        </ActionButton>
      </Actions>
      <TaskList boardId={props.boardId} columnId={props.id} tasks={props.tasks} />
    </ColumnContainer>
  );
}

export default ColumnItem;
