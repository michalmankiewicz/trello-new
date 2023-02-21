import { Task } from '../tasks';

export type Column = {
  id: string;
  title: string;
  order: number;
  tasks: Task[];
};

export type NewColumn = {
  title: string;
};

export type EditColumnPayload = {
  title: string;
  order: number;
};
