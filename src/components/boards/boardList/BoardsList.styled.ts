import styled from 'styled-components';
import { MEDIA_QUERIES } from '../../../GlobalStyles';
import theme from '../../../utils/styledCompentsUtils/theme';
import { BoardContainer } from '../boardItem/BoardItem.styled';

export const BoardsContainer = styled.div`
  margin: 0 auto;
`;

export const Title = styled.h2`
  font-size: 2.6rem;
  margin-bottom: 2rem;
`;

export const List = styled.ul`
  margin: 0 1rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(30rem, 1fr));
  gap: 25px;

  @media (max-width: ${MEDIA_QUERIES.w44}) {
    margin: 0;
  }
`;

export const NewBoard = styled(BoardContainer)`
  justify-content: center;
  align-items: center;

  & svg {
    color: ${theme.colors.white};
    font-size: 10rem;
  }
`;
