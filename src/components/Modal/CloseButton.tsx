import React from 'react';
import { Icon } from 'components/Icon';
interface ICloseButtonProps {
  toggleModal: Function;
  func: Function;
}
const CloseButton: React.FC<ICloseButtonProps> = ({ toggleModal, func }) => {
  const clickHandler = () => {
    toggleModal();
    func();
  };
  return (
    <button type="button" onClick={clickHandler}>
      <Icon classes="fa fa-times" />
    </button>
  );
};

export default CloseButton;
