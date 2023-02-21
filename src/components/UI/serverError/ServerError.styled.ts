import styled from 'styled-components';
import theme from '../../../utils/styledCompentsUtils/theme';
import { MEDIA_QUERIES } from '../../../GlobalStyles';

export const ServerErrorContainer = styled.div`
  /* margin-bottom: 2rem; */
  border-radius: ${theme.borderRadius};
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem 2rem;
  background-color: ${theme.colors.errorBgRed};

  & svg {
    color: ${theme.colors.errorRed};
    font-size: 2.4rem;
    margin-bottom: 0.2rem;
  }

  @media (max-width: ${MEDIA_QUERIES.w44}) {
    flex-direction: column;
    gap: 0.4rem;
    margin-bottom: 3rem;

    & svg {
      font-size: 3.6rem;
    }
  }
`;

export const ServerErrorMessage = styled.h3`
  font-size: 1.6rem;
  color: ${theme.colors.errorFontBlack};
  text-align: center;
`;
