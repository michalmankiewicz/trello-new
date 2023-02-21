import React from 'react';
import { Column } from '../../../types/columns';
import ColumnItem from '../columnItem/ColumnItem';

type Props = {
  draggedColumn: Column;
};

function ColumnDragOverlay({ draggedColumn }: Props) {
  return (
    <ColumnItem
      key={draggedColumn?.id}
      title={draggedColumn?.title}
      id={draggedColumn?.id}
      order={draggedColumn?.order}
      tasks={draggedColumn?.tasks ?? []}
      boardId={''}
      onDeleteColumn={() => {}}
      isColumnEditing={''}
      toggleEditing={() => {}}
    />
  );
}

export default ColumnDragOverlay;
