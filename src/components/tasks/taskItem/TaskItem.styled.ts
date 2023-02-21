import styled from 'styled-components';
import theme from '../../../utils/styledCompentsUtils/theme';

export const TaskContainer = styled.div`
  width: 100%;
  background-color: ${theme.colors.white};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  border-radius: ${theme.borderRadius};
`;

export const Title = styled.h5`
  font-size: 2rem;
  color: ${theme.colors.greyDark};
`;

export const Input = styled.input`
  padding: 0.4rem 0.8rem;
  font-size: 1.6rem;
  font-weight: 700;
  color: ${theme.colors.greyDark};
  width: 90%;
  border-radius: 5px;
  border: 3px solid ${theme.colors.primary};
`;

export const ActionButton = styled.button`
  background-color: transparent;
  padding: 0.4rem;
  border-radius: 5px;
  border: none;

  & svg {
    font-size: 2.4rem;
    color: ${theme.colors.greyDark};
  }
`;
