import styled from 'styled-components';
import { MEDIA_QUERIES } from '../../../GlobalStyles';

export const ModalContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 3rem 5rem;
  overflow: hidden;
  border-radius: 14px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
  z-index: 30;
  min-width: 70rem;

  @media (max-width: ${MEDIA_QUERIES.w50}) {
    min-width: 0;
    width: 90%;
  }

  @media (max-width: ${MEDIA_QUERIES.w44}) {
    padding: 2rem 2rem;
  }
`;
