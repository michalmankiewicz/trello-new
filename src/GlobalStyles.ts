import styled, { createGlobalStyle } from 'styled-components';
import theme from './utils/styledCompentsUtils/theme';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family:sans-serif;
  }

  html{
    font-size: 62.5%;
  }
`;

export const MEDIA_QUERIES = {
  // 700px
  w44: '44rem',
  // 800px
  w50: '50rem',
  // 1024 px
  w64: '64rem',
  // 1200 px
  w85: '85rem',
};

export const SubmitButton = styled.button`
  border: none;
  background-color: ${theme.colors.primary};
  color: ${theme.colors.white};
  padding: 1.6rem 3.2rem;
  font-size: 2rem;
  border-radius: ${theme.borderRadius};
  margin-bottom: 1.6rem;
  display: block;
  margin: 0 auto;

  &:hover {
    cursor: pointer;
    background-color: ${theme.colors.primaryShaded};
  }
`;

export const GlobalControls = styled.fieldset`
  border: none;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 2rem;

  @media (max-width: ${MEDIA_QUERIES.w50}) {
    margin-bottom: 1rem;
  }
`;

export default GlobalStyles;
