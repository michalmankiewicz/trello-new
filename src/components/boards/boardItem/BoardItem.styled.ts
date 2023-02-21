import styled from 'styled-components';
import theme from '../../../utils/styledCompentsUtils/theme';

export const BoardContainer = styled.li`
  background-color: ${theme.colors.primary};
  opacity: 1;
  list-style: none;
  width: 100%;
  height: 25rem;
  border-radius: ${theme.borderRadius};
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.144);
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &:hover {
    cursor: pointer;
    background-color: ${theme.colors.primaryShaded};
  }
`;

export const Title = styled.h4`
  font-size: 2.4rem;
  color: ${theme.colors.white};
  margin-bottom: 2rem;
`;

export const Description = styled.p`
  font-size: 2rem;
  line-height: 25px;
  color: ${theme.colors.white};
`;

export const Actions = styled.div`
  align-self: flex-end;
  display: flex;
  align-items: center;
  gap: 5px;
`;

export const ActionButton = styled.button`
  background-color: ${theme.colors.white};
  padding: 0.8rem;
  border-radius: 5px;
  border: none;

  & svg {
    font-size: 3rem;
  }
`;
