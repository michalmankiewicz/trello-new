import { GlobalControls, MEDIA_QUERIES, SubmitButton } from '../../../GlobalStyles';
import styled from '../../../utils/styledCompentsUtils/styled-components';
import theme from '../../../utils/styledCompentsUtils/theme';
import { spin } from '../../../utils/styledCompentsUtils/animations';

export const AuthContainer = styled.form`
  margin: 3rem auto 2rem auto;
  padding: 3rem;
  width: 30%;
  min-width: 40rem;
  background-color: ${theme.colors.white};
  border-radius: ${theme.borderRadius};
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.144);

  @media (max-width: ${MEDIA_QUERIES.w50}) {
    width: 90%;
    min-width: 0;
  }

  @media (max-width: ${MEDIA_QUERIES.w44}) {
    width: 100%;
    padding: 2rem;
  }
`;

export const Title = styled.h3`
  font-size: 3.6rem;
  text-align: center;
  margin-bottom: 2rem;

  @media (max-width: ${MEDIA_QUERIES.w44}) {
    font-size: 3rem;
  }
`;

export const Controls = styled(GlobalControls)`
  gap: 20px;
  margin-bottom: 2.4rem;

  @media (max-width: ${MEDIA_QUERIES.w44}) {
    margin-bottom: 1.6rem;
  }
`;

export const AuthSubmitButton = styled(SubmitButton)`
  width: 100%;
  margin-bottom: 1.6rem;

  &:disabled {
    cursor: not-allowed;
    background-color: ${theme.colors.primaryShaded};
  }

  & svg {
    font-size: 2rem;
    animation: ${spin} 2s infinite linear;
  }
`;

export const ToggleParagraph = styled.p`
  font-size: 1.6rem;
  text-align: center;
  padding: 1rem 0 0 0;
  border-top: 2px solid ${theme.colors.greyLight};

  & a {
    color: ${theme.colors.primary};
    font-weight: 700;
    text-decoration: none;

    &:hover {
      color: ${theme.colors.primaryShaded};
      cursor: pointer;
    }
  }
`;
