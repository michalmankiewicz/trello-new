export type Board = {
  title: string;
  description: string;
  id: string;
};
export type NewBoard = {
  title: string;
  description: string;
};

export type updateTypes = 'add' | 'delete' | 'edit';

// TODO
export const UPDATE_TYPES: {
  add: 'add';
  delete: 'delete';
  edit: 'edit';
} = {
  add: 'add',
  delete: 'delete',
  edit: 'edit',
};
