import React from 'react';
import { Task } from '../../../types/tasks';
import TaskItem from '../taskItem/TaskItem';

type Props = {
  draggedTask: Task;
};

function TaskDragOverlay({ draggedTask }: Props) {
  return (
    <TaskItem
      id={draggedTask?.id}
      title={draggedTask?.title}
      order={1}
      onDeleteTask={() => {}}
      isEditing=""
      toggleEditing={() => {}}
      boardId={''}
      columnId={''}
    />
  );
}

export default TaskDragOverlay;
