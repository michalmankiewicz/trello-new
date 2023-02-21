import { Spinner } from 'phosphor-react';
import React from 'react';

import Backdrop from '../backdrop/Backdrop';
import { OverlayContainer } from './LoadingOverlay.styled';

function LoadingOverlay() {
  return (
    <>
      <OverlayContainer>
        <Spinner />
      </OverlayContainer>
      <Backdrop />
    </>
  );
}

export default LoadingOverlay;
