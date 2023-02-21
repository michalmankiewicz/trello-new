import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { MEDIA_QUERIES } from '../../../GlobalStyles';
import theme from '../../../utils/styledCompentsUtils/theme';
import { ColumnContainer } from '../columnItem/ColumnItem.styled';

export const ColumnsContainer = styled.div`
  margin: 0 auto;
`;

export const Header = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2rem;
`;

export const Title = styled.h2`
  font-size: 2.6rem;
`;

export const BackLink = styled(Link)`
  font-size: 2rem;
  text-decoration: none;
  color: ${theme.colors.greyDark};
  display: flex;
  align-items: center;
  gap: 0.4rem;
`;

export const List = styled.ul`
  margin: 0 1rem;
  display: flex;
  flex-wrap: nowrap;
  gap: 25px;
  padding-bottom: 2rem;
  overflow-x: auto;

  @media (max-width: ${MEDIA_QUERIES.w44}) {
    margin: 0;
  }
`;

export const NewColumn = styled(ColumnContainer)`
  justify-content: center;
  align-items: center;

  & svg {
    color: ${theme.colors.white};
    font-size: 10rem;
  }
`;
