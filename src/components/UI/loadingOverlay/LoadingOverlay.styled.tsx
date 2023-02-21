import { spin } from '../../../utils/styledCompentsUtils/animations';
import styled from '../../../utils/styledCompentsUtils/styled-components';

export const OverlayContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 100;

  & svg {
    font-size: 10rem;
    animation: ${spin} 2s infinite linear;
  }
`;
