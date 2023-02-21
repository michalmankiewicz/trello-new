export type Task = {
  title: string;
  id: string;
  order: number;
};

export type NewTask = {
  title: string;
};

export type NewTaskPayload = {
  title: string;
  userId: string;
  description: string;
};

export type NewTaskURLData = { boardId: string; columnId: string };

export type DeleteTaskURLData = { boardId: string; columnId: string; taskId: string };

export type EditTaskPayload = {
  title: string;
  order: number;
  description: string;
  userId: string;
};

export type EditTaskURLData = {
  boardId: string;
  columnId: string;
  changedColumnId?: string;
  taskId: string;
};
