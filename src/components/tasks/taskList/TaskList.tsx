import { SortableContext } from '@dnd-kit/sortable';
import { verticalListSortingStrategy } from '@dnd-kit/sortable';
import { Plus } from 'phosphor-react';
import React, { memo, useCallback, useMemo, useState } from 'react';
import useModal from '../../../hooks/useModal';
import { updateTypes } from '../../../types/boards';
import { Task } from '../../../types/tasks';
import TaskItem from '../taskItem/TaskItem';
import UpdateTaskModal from '../updateTaskModal/UpdateTaskModal';
import { TaskListContainer, NewTask } from './TaskList.styled';

type Props = {
  tasks: Task[];
  boardId: string;
  columnId: string;
};

function TaskList(props: Props) {
  const [isEditing, setIsEditing] = useState<string | null>(null);

  // Modal logic
  const { isShowing: isModalOpen, openModal, closeModal } = useModal();

  const [modalStatus, setModalStatus] = useState<updateTypes | undefined>();
  const [taskId, setTaskId] = useState<string | undefined>();

  const updateTasks = useCallback(
    (actionType: updateTypes | undefined, id?: string) => {
      setModalStatus(actionType);
      setTaskId(id);
      openModal();
    },
    [openModal]
  );

  const sortedTasks = useMemo(() => {
    if (!props) return;

    const tasks = [...props.tasks];

    return tasks.sort((a: Task, b: Task) => a.order - b.order);
  }, [props]);

  return (
    <>
      <SortableContext
        id={props.columnId}
        items={sortedTasks?.map((task) => task.id) ?? []}
        strategy={verticalListSortingStrategy}
      >
        <TaskListContainer>
          {sortedTasks?.map((task) => (
            <TaskItem
              onDeleteTask={() => {
                updateTasks('delete', task.id);
              }}
              isEditing={isEditing}
              toggleEditing={setIsEditing}
              key={task.id}
              title={task.title}
              id={task.id}
              order={task.order}
              boardId={props.boardId}
              columnId={props.columnId}
            />
          ))}

          <NewTask
            onClick={() => {
              updateTasks('add');
            }}
          >
            <Plus weight="bold" />
          </NewTask>
        </TaskListContainer>
      </SortableContext>
      {isModalOpen && (
        <UpdateTaskModal
          type={modalStatus}
          closeModal={closeModal}
          boardId={props.boardId}
          columnId={props.columnId}
          taskId={taskId}
        />
      )}
    </>
  );
}

export default memo(TaskList);
