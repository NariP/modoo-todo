import React, { useState } from 'react';
import styled from 'styled-components';
interface IToggleButtonProps {
  setTheme: Function;
}
const ToggleButton: React.FC<IToggleButtonProps> = ({ setTheme }) => {
  const [toggle, setToggle] = useState<boolean>(true);
  const onClickHandler = () => {
    setToggle(!toggle);
    setTheme((prev: boolean) => !prev);
  };
  return (
    <StyledLine toggle={toggle}>
      <StyledButton type="button" onClick={onClickHandler} toggle={toggle} />
    </StyledLine>
  );
};

const StyledLine = styled.div<{ toggle: boolean }>`
  position: relative;
  width: 30px;

  height: 1em;
  border-radius: 10px;
  margin: 0 3px 0 3px;
  background: ${props => (props.toggle ? '#89d99f' : 'tomato')};
  box-shadow: inset 0 3px 5px rgba(153, 153, 153, 0.3);
  transition: all 0.5s ease;
`;
const StyledButton = styled.button<{ toggle: boolean }>`
  background: ${({ theme }) => theme.color.bgColor};

  position: absolute;
  width: 1em;
  height: inherit;
  border-radius: 50%;
  border: 1px solid rgba(153, 153, 153, 0.3);
  box-shadow: 0 3px 5px rgba(153, 153, 153, 0.3);
  transform: ${props => (props.toggle ? 'translateX(0)' : 'translateX(100%)')};
  transition: all 0.5s ease;
`;
export default ToggleButton;
