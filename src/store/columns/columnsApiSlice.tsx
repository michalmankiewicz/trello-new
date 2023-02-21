import { apiSlice } from '../../api/apiSlice';
import { Column, EditColumnPayload, NewColumn } from '../../types/columns';
import { reorderTasks } from '../../utils/tasksUtils';

export const columnApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    addColumn: builder.mutation({
      query: (data: { boardId: string; body: NewColumn }) => ({
        url: `/boards/${data.boardId}/columns`,
        method: 'POST',
        body: data.body,
      }),
      invalidatesTags: ['Columns'],
    }),
    deleteColumn: builder.mutation({
      query: (data: { boardId: string; columnId: string }) => ({
        url: `boards/${data.boardId}/columns/${data.columnId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Columns'],
    }),
    editColumn: builder.mutation({
      query: (data: { body: EditColumnPayload; boardId: string; columnId: string }) => ({
        url: `boards/${data.boardId}/columns/${data.columnId}`,
        method: 'PUT',
        body: {
          title: data.body.title,
          order: data.body.order,
        },
      }),
      async onQueryStarted(data, { dispatch, queryFulfilled }) {
        const patchResult = dispatch(
          // TODO
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          apiSlice.util.updateQueryData<string>(
            'getBoardWithDetails',
            data.boardId,
            (draft: { columns: Column[] }) => {
              const columns = draft.columns;

              const editedColumn = columns.find((el) => el.id === data.columnId);
              const columnIndex = columns.findIndex((el) => el.id === data.columnId);

              if (!editedColumn || columnIndex === undefined) return;

              columns.splice(columnIndex as number, 1);

              const prevOrder = editedColumn.order;
              const { title, order: newOrder } = data.body;

              reorderTasks(columns, prevOrder, newOrder);

              columns.push({
                ...editedColumn,
                order: newOrder,
                title: title,
              });
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

export const { useAddColumnMutation, useEditColumnMutation, useDeleteColumnMutation } =
  columnApiSlice;
