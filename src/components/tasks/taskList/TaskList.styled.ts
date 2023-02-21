import styled from 'styled-components';
import theme from '../../../utils/styledCompentsUtils/theme';
import { TaskContainer } from '../taskItem/TaskItem.styled';

export const TaskListContainer = styled.div`
  align-self: stretch;
  margin: 0 0.4rem;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding-right: 0.2rem;
  border-radius: ${theme.borderRadius};
`;
export const NewTask = styled(TaskContainer)`
  justify-content: center;
  align-items: center;

  & svg {
    color: ${theme.colors.greyDark};
    font-size: 3rem;
  }
`;
