import styled from 'styled-components';
import { MEDIA_QUERIES } from '../../../GlobalStyles';
import theme from '../../../utils/styledCompentsUtils/theme';

export const ErrorMessage = styled.p`
  color: ${theme.colors.errorRed};
  font-size: 1.4rem;
  margin-left: 0.4rem;
  font-weight: 700;

  @media (max-width: ${MEDIA_QUERIES.w44}) {
    font-size: 1.2rem;
  }
`;
