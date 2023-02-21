import { useSortable } from '@dnd-kit/sortable';
import { Trash } from 'phosphor-react';
import React, { Dispatch, useRef } from 'react';
import { selectUserId } from '../../../store/auth/authSelectors';
import { setError } from '../../../store/status/statusSlice';
import { useEditTaskMutation } from '../../../store/tasks/tasksApiSlice';
import { useAppDispatch, useAppSelector } from '../../../types/redux';
import { handleErrorMessage } from '../../../utils/errorUtils';

import { TaskContainer, Title, ActionButton, Input } from './TaskItem.styled';
import { CSS } from '@dnd-kit/utilities';

type Props = {
  title: string;
  id: string;
  order: number;
  onDeleteTask: () => void;
  isEditing: string | null;
  toggleEditing: (id: string | null) => void;
  boardId: string;
  columnId: string;
};

function TaskItem(props: Props) {
  const [editTask] = useEditTaskMutation();
  const userId = useAppSelector(selectUserId);
  const inputRef = useRef<HTMLInputElement>(null);
  const dispatch = useAppDispatch();

  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({
    id: props.id,
    data: {
      type: 'task',
      columnId: props.columnId,
      order: props.order,
    },
  });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  const editHandler = async (e: React.FormEvent) => {
    e.preventDefault();
    const value = inputRef.current?.value;
    if (!value || value.trim() === '' || value.trim().length > 10) return;

    const body = {
      title: value,
      description: 'DUMMY DESCRIPTION',
      order: props.order,
      userId: userId,
    };

    const urlData = {
      boardId: props.boardId,
      columnId: props.columnId,
      taskId: props.id,
    };

    try {
      await editTask({
        body,
        urlData: urlData,
      }).unwrap();
    } catch (err) {
      const errorMessage = handleErrorMessage(err);
      dispatch(setError(errorMessage));
    }
    props.toggleEditing(null);
  };

  return (
    <TaskContainer ref={setNodeRef} style={style} {...attributes} {...listeners}>
      {props.isEditing === props.id ? (
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
      <ActionButton onClick={props.onDeleteTask}>
        <Trash />
      </ActionButton>
    </TaskContainer>
  );
}

export default TaskItem;
