import { Pencil, Trash } from 'phosphor-react';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BoardContainer, Description, Title, Actions, ActionButton } from './BoardItem.styled';

type Props = {
  onDeleteBoard: () => void;
  onEditBoard: () => void;
  title: string;
  description: string;
  id: string;
};

function BoardItem(props: Props) {
  const navigate = useNavigate();

  return (
    <BoardContainer onClick={() => navigate(props.id)}>
      <div>
        <Title>{props.title}</Title>
        <Description>{props.description}</Description>
      </div>
      <Actions>
        <ActionButton
          onClick={(e: React.MouseEvent) => {
            e.stopPropagation();
            props.onEditBoard();
          }}
        >
          <Pencil />
        </ActionButton>
        <ActionButton
          onClick={(e: React.MouseEvent) => {
            e.stopPropagation();
            props.onDeleteBoard();
          }}
        >
          <Trash />
        </ActionButton>
      </Actions>
    </BoardContainer>
  );
}

export default BoardItem;
