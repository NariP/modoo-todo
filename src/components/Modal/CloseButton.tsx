import React from 'react';
import { Icon } from 'components/Icon';
interface ICloseButtonProps {
  toggleModal: Function;
}
const CloseButton: React.FC<ICloseButtonProps> = ({ toggleModal }) => {
  const clickHandler = () => {
    toggleModal();
  };
  return (
    <button type="button" onClick={clickHandler}>
      <Icon>✖️</Icon>
    </button>
  );
};

export default CloseButton;
