import { Task } from '../../types/tasks';

export const reorderTasks = (tasks: Task[], prevOrder: number, newOrder: number) => {
  tasks.forEach((el) => {
    if (newOrder > prevOrder) {
      if (el.order > prevOrder && el.order <= newOrder) el.order--;
    } else {
      if (el.order < prevOrder && el.order >= newOrder) el.order++;
    }
  });
};

// export const reorderTaskInOtherColumn = (tasks: Task[], newItemOrder: number) => {
//   tasks.forEach((el) => {
//     if (el.order >= newItemOrder) el.order++;
//   });
// };
