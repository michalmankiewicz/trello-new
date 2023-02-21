import React, { useCallback, useEffect, useState } from 'react';
import BoardsList from '../components/boards/boardList/BoardsList';
import BoardsModal from '../components/boards/boardsModal/BoardsUpdateModal';
import useModal from '../hooks/useModal';
import { selectToken } from '../store/auth/authSelectors';
import { useGetBoardsQuery } from '../store/boards/boardsApiSlice';
import { setError } from '../store/status/statusSlice';

import { Board, updateTypes } from '../types/boards';
import { useAppDispatch, useAppSelector } from '../types/redux';

function Boards() {
  const token = useAppSelector(selectToken);
  const { data, isError } = useGetBoardsQuery(token);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (isError) {
      dispatch(setError('Something went wrong'));
    }
  }, [dispatch, isError]);

  const { isShowing: isModalOpen, openModal, closeModal } = useModal();
  const [modalStatus, setModalStatus] = useState<updateTypes | undefined>();
  const [chosenBoardData, setChosenBoardData] = useState<Board | undefined>();

  const updateBoards = useCallback(
    (actionType: updateTypes | undefined, boardData?: Board) => {
      setModalStatus(actionType);
      setChosenBoardData(boardData);
      openModal();
    },
    [openModal]
  );

  return (
    <>
      <BoardsList onUpdateBoards={updateBoards} boards={data} />
      {isModalOpen && (
        <BoardsModal closeModal={closeModal} type={modalStatus} boardData={chosenBoardData} />
      )}
    </>
  );
}

export default Boards;
