import styled from 'styled-components';
import { SubmitButton } from '../../../GlobalStyles';

export const Question = styled.h2`
  font-size: 3rem;
  text-align: center;
  margin-bottom: 3rem;
`;

export const Actions = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;
`;

export const ActionButton = styled(SubmitButton)`
  margin: 0;
`;
