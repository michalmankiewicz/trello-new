import React, { PropsWithChildren } from 'react';
import ReactDOM from 'react-dom';
import Backdrop from '../backdrop/Backdrop';
import { ModalContainer } from './Modal.styled';

type Props = {
  hideModal: () => void;
};

const ModalOverlay = (props: PropsWithChildren<Props>) => {
  return (
    <>
      <ModalContainer>{props.children}</ModalContainer>
      <Backdrop onClick={props.hideModal} />
    </>
  );
};

// TODO Should portal be in seperate files?

const portalElement: HTMLElement = document.getElementById('modal')!;

type ModalProps = {
  hideModal: () => void;
};

const Modal = (props: PropsWithChildren<ModalProps>) => {
  return ReactDOM.createPortal(
    <ModalOverlay hideModal={props.hideModal}>{props.children}</ModalOverlay>,
    portalElement
  );
};

export default Modal;
