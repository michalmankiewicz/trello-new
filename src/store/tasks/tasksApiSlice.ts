import { apiSlice } from '../../api/apiSlice';
import { Column } from '../../types/columns';
import {
  DeleteTaskURLData,
  EditTaskPayload,
  EditTaskURLData,
  NewTaskPayload,
  NewTaskURLData,
} from '../../types/tasks';
import { reorderTasks } from '../../utils/tasksUtils';

export const tasksApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    addTask: builder.mutation({
      query: (data: { urlData: NewTaskURLData; body: NewTaskPayload }) => ({
        url: `/boards/${data.urlData.boardId}/columns/${data.urlData.columnId}/tasks`,
        method: 'POST',
        body: data.body,
      }),
      invalidatesTags: ['Tasks'],
    }),
    deleteTask: builder.mutation({
      query: (data: DeleteTaskURLData) => ({
        url: `/boards/${data.boardId}/columns/${data.columnId}/tasks/${data.taskId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Tasks'],
    }),
    editTask: builder.mutation<void, { body: EditTaskPayload; urlData: EditTaskURLData }>({
      query: (data) => ({
        url: `/boards/${data.urlData.boardId}/columns/${data.urlData.columnId}/tasks/${data.urlData.taskId}`,
        method: 'PUT',
        body: {
          ...data.body,
          boardId: data.urlData.boardId,
          columnId: data.urlData.changedColumnId ?? data.urlData.columnId,
        },
      }),
      async onQueryStarted(data, { dispatch, queryFulfilled }) {
        const patchResult = dispatch(
          // TODO
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          apiSlice.util.updateQueryData<string>(
            'getBoardWithDetails',
            data.urlData.boardId,
            (draft: { columns: Column[] }) => {
              const columns = draft.columns;

              const editedColumn = columns.find((el) => el.id === data.urlData.columnId);
              const editedTask = editedColumn?.tasks.find((el) => el.id === data.urlData.taskId);
              const taskIndex = editedColumn?.tasks.findIndex(
                (el) => el.id === data.urlData.taskId
              );
              const changedColumn = columns.find((el) => el.id === data.urlData?.changedColumnId);
              const { title, order: newOrder } = data.body;

              if (!editedTask || !editedColumn || taskIndex === undefined) return;

              editedColumn?.tasks.splice(taskIndex as number, 1);

              if (changedColumn) {
                reorderTasks(changedColumn.tasks, newOrder, newOrder);

                changedColumn.tasks.push({
                  ...editedTask,
                  order: newOrder,
                });
              } else {
                const prevOrder = editedTask.order;

                reorderTasks(editedColumn.tasks, prevOrder, newOrder);

                editedColumn.tasks.push({
                  ...editedTask,
                  order: newOrder,
                  title: title,
                });
              }
            }
          )
        );
        try {
          await queryFulfilled;
        } catch {
          patchResult.undo();
        }
      },
    }),
  }),
});

export const { useAddTaskMutation, useEditTaskMutation, useDeleteTaskMutation } = tasksApiSlice;
