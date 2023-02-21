import React, { memo } from 'react';
import BoardItem from '../boardItem/BoardItem';
import './BoardsList.styled';
import { BoardsContainer, Title, List, NewBoard } from './BoardsList.styled';
import { Plus } from 'phosphor-react';
import { Board, updateTypes, UPDATE_TYPES } from '../../../types/boards';
import { useTranslation } from 'react-i18next';

type Props = {
  onUpdateBoards: (type: updateTypes, board?: Board) => void;
  boards: Board[] | undefined;
};

function BoardsList(props: Props) {
  const { t } = useTranslation();

  return (
    <BoardsContainer>
      <Title>{t('boards.title')}</Title>
      {props.boards && (
        <List>
          {props?.boards?.map((board) => (
            <BoardItem
              onDeleteBoard={() => props.onUpdateBoards(UPDATE_TYPES.delete, board)}
              onEditBoard={() => props.onUpdateBoards(UPDATE_TYPES.edit, board)}
              title={board.title}
              description={board.description}
              id={board.id}
              key={board.id}
            />
          ))}
          <NewBoard onClick={() => props.onUpdateBoards(UPDATE_TYPES.add)}>
            <Plus weight="bold" />
          </NewBoard>
        </List>
      )}
    </BoardsContainer>
  );
}

export default memo(BoardsList);
