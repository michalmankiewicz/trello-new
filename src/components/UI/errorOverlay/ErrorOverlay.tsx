import React, { useEffect } from 'react';
import useModal from '../../../hooks/useModal';
import { resetError } from '../../../store/status/statusSlice';
import { useAppDispatch } from '../../../types/redux';

import Modal from '../modal/Modal';
import ServerError from '../serverError/ServerError';

function ErrorOverlay() {
  const { isShowing, closeModal, openModal } = useModal();
  const dispatch = useAppDispatch();

  useEffect(() => {
    openModal();
  }, [openModal]);

  return (
    <>
      {isShowing && (
        <Modal
          hideModal={() => {
            closeModal();
            dispatch(resetError());
          }}
        >
          <ServerError errorMessage="Somethign went wrong" />
        </Modal>
      )}
    </>
  );
}

export default ErrorOverlay;
