import styled from 'styled-components';
import theme from '../../../utils/styledCompentsUtils/theme';
import { ColumnContianerProps } from './ColumnItem.type';

export const ColumnContainer = styled.li<ColumnContianerProps>`
  background-color: ${(p) =>
    p.isTaskOverContainer ? theme.colors.primaryShadedDarker : theme.colors.primary};
  opacity: 1;
  list-style: none;
  min-width: 30rem;
  height: 70vh;
  min-height: 50rem;
  border-radius: ${theme.borderRadius};
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.144);
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1.6rem;

  &:hover {
    cursor: pointer;
    background-color: ${theme.colors.primaryShaded};
  }
`;

export const Actions = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.h4`
  font-size: 2.4rem;
  color: ${theme.colors.white};
`;

export const Input = styled.input`
  padding: 0.4rem 0.8rem;
  font-size: 1.6rem;
  font-weight: 700;
  color: ${theme.colors.greyDark};
  width: 90%;
  border-radius: 5px;
  border: 3px solid ${theme.colors.primary};

  &:focus {
  }
`;

export const ActionButton = styled.button`
  background-color: ${theme.colors.white};
  padding: 0.4rem;
  border-radius: 5px;
  border: none;

  & svg {
    font-size: 2.4rem;
  }
`;
