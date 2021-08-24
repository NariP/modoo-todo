import React, { useState } from 'react';
import styled from 'styled-components';

const ToggleButton = () => {
  const [toggle, setToggle] = useState<boolean>(true);
  const onClickHandler = () => {
    setToggle(!toggle);
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
  transition: all 1s ease;
`;
const StyledButton = styled.button<{ toggle: boolean }>`
  // NOTE: theme
  background: white;

  position: absolute;
  width: 1em;
  height: inherit;
  border-radius: 50%;
  border: 1px solid rgba(153, 153, 153, 0.3);
  box-shadow: 0 3px 5px rgba(153, 153, 153, 0.3);
  transform: ${props => (props.toggle ? 'translateX(0)' : 'translateX(100%)')};
  transition: all 1s ease;
`;
export default ToggleButton;
