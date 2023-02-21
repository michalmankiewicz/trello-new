import React, { memo, useCallback, useEffect, useMemo, useState } from 'react';
import { Column } from '../../../types/columns';
import ColumnItem from '../columnItem/ColumnItem';
import { ColumnsContainer, Header, Title, BackLink, List, NewColumn } from './ColumnList.styled';
import { CaretLeft, Plus } from 'phosphor-react';
import { useParams } from 'react-router-dom';
import { useGetBoardWithDetailsQuery } from '../../../store/boards/boardsApiSlice';
import { skipToken } from '@reduxjs/toolkit/dist/query';
import { updateTypes } from '../../../types/boards';
import useModal from '../../../hooks/useModal';
import UpdateColumnModal from '../updateColumnModal/UpdateColumnModal';
import { useAppDispatch, useAppSelector } from '../../../types/redux';
import { setError } from '../../../store/status/statusSlice';
import {
  DndContext,
  DragEndEvent,
  DragStartEvent,
  DragOverlay,
  MouseSensor,
  useSensor,
  useSensors,
  closestCenter,
} from '@dnd-kit/core';
import { UniqueIdentifier } from '@dnd-kit/core';
import { Task } from '../../../types/tasks';
import { SortableContext } from '@dnd-kit/sortable';
import { horizontalListSortingStrategy } from '@dnd-kit/sortable';
import { useEditColumnMutation } from '../../../store/columns/columnsApiSlice';
import { useEditTaskMutation } from '../../../store/tasks/tasksApiSlice';
import { selectUserId } from '../../../store/auth/authSelectors';
import ColumnDragOverlay from '../dragOverlay/ColumnDragOverlay';
import TaskDragOverlay from '../../tasks/dragOverlay/TaskDragOverlay';

function ColumnList() {
  const { boardId } = useParams();

  const { data, isError } = useGetBoardWithDetailsQuery(boardId ?? skipToken);

  const userId = useAppSelector(selectUserId);

  //////////////////////////////////////
  // DRAG N DROP LOGIC

  const [editColumn] = useEditColumnMutation();
  const [editTask] = useEditTaskMutation();

  const [activeColumnId, setActiveColumnId] = useState<UniqueIdentifier | null>();
  const [activeTaskId, setActiveTaskId] = useState<UniqueIdentifier | null>();

  const draggedColumn = data?.columns.find((col: Column) => col.id === activeColumnId);
  const draggedTask = draggedColumn?.tasks.find((task: Task) => task.id === activeTaskId);

  const handleDragStart = (event: DragStartEvent) => {
    const { active } = event;
    const { id } = active;

    if (active.data?.current?.type === 'task') {
      setActiveTaskId(id);
      setActiveColumnId(active.data?.current.columnId);
    } else setActiveColumnId(id);
  };

  const handleDragEnd = async (event: DragEndEvent) => {
    const { active, over } = event;

    if (active.data?.current?.type === 'task') {
      const overContainer = over?.data?.current?.columnId;

      const body = {
        title: draggedTask.title,
        order: overContainer ? over?.data?.current?.order : 1,
        description: draggedTask.description,
        userId,
      };

      const urlData = {
        boardId: boardId ?? '',
        columnId: draggedColumn.id,
        taskId: draggedTask.id,
      };

      if (activeColumnId === overContainer) {
        await editTask({
          body,
          urlData,
        });
      } else {
        await editTask({
          body,
          urlData: {
            ...urlData,
            changedColumnId: overContainer ?? over?.id,
          },
        });
      }
    } else if (active.data?.current?.type === 'column') {
      const body = {
        title: draggedColumn.title,
        order: over?.data?.current?.order ?? 1,
      };

      await editColumn({
        body,
        boardId: boardId ?? '',
        columnId: draggedColumn.id,
      });
    }

    setActiveColumnId(null);
    setActiveTaskId(null);
  };

  const mouseSensor = useSensor(MouseSensor, {
    activationConstraint: {
      distance: 10,
    },
  });

  const sensors = useSensors(mouseSensor);

  let dragOverlay: JSX.Element | null = null;
  if (activeTaskId && activeColumnId) dragOverlay = <TaskDragOverlay draggedTask={draggedTask} />;
  else if (activeColumnId) dragOverlay = <ColumnDragOverlay draggedColumn={draggedColumn} />;

  ////////////////////////////////////////////

  const [isColumnEditing, setIsColumnEditing] = useState<string | null>(null);

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (isError) {
      dispatch(setError('Something went wrong'));
    }
  }, [dispatch, isError]);

  // Modal logic
  const { isShowing: isModalOpen, openModal, closeModal } = useModal();

  const [modalStatus, setModalStatus] = useState<updateTypes | undefined>();
  const [columnId, setColumnId] = useState<string | undefined>();

  const updateColumn = useCallback(
    (type: updateTypes | undefined, id?: string) => {
      setModalStatus(type);
      setColumnId(id);
      openModal();
    },
    [openModal]
  );

  const sortedColumns = useMemo(() => {
    if (!data) return;

    const columns = [...data.columns];

    return columns.sort((a: Column, b: Column) => a.order - b.order);
  }, [data]);

  // ///////////////////////////////////////

  return (
    <>
      <ColumnsContainer>
        <Header>
          <Title>{data?.title}</Title>
          <BackLink to="/boards">
            <CaretLeft />
            <span>Back</span>
          </BackLink>
        </Header>

        <List>
          <DndContext
            sensors={sensors}
            collisionDetection={closestCenter}
            onDragStart={handleDragStart}
            onDragEnd={handleDragEnd}
          >
            <SortableContext
              items={sortedColumns?.map((col) => col.id) ?? []}
              strategy={horizontalListSortingStrategy}
            >
              {sortedColumns?.map((col: Column) => (
                <ColumnItem
                  key={col.id}
                  title={col.title}
                  tasks={col.tasks}
                  boardId={boardId ?? ''}
                  id={col.id}
                  order={col.order}
                  onDeleteColumn={() => {
                    updateColumn('delete', col.id);
                  }}
                  isColumnEditing={isColumnEditing}
                  toggleEditing={setIsColumnEditing}
                />
              ))}

              <NewColumn onClick={() => updateColumn('add')}>
                <Plus weight="bold" />
              </NewColumn>
            </SortableContext>
            <DragOverlay>{dragOverlay}</DragOverlay>
          </DndContext>
        </List>
      </ColumnsContainer>
      {isModalOpen && (
        <UpdateColumnModal
          type={modalStatus}
          boardId={boardId ?? ''}
          columnId={columnId}
          closeModal={closeModal}
        />
      )}
    </>
  );
}

export default memo(ColumnList);
