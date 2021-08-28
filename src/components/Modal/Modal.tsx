import React, { useRef, MouseEvent } from 'react';
import styled from 'styled-components';

interface IModalProps {
  open: boolean;
  toggleModal: Function;
  func?: Function;
}
const Modal: React.FC<IModalProps> = ({
  children,
  toggleModal,
  open,
  func,
}) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const clickHandler = (e: MouseEvent<HTMLDivElement>) => {
    if (e.target !== modalRef.current) return;
    toggleModal();
    if (!func) return;
    func();
  };
  return (
    <StyledModal ref={modalRef} open={open} onClick={clickHandler}>
      {children}
    </StyledModal>
  );
};
const StyledModal = styled.div<{ open: boolean }>`
  display: ${props => (props.open ? 'flex' : 'none')};
  background-color: rgba(200, 200, 200, 0.6);
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  align-items: center;
  justify-content: center;
  z-index: 100;
`;
export default Modal;
