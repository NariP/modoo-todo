import React, { useState } from 'react';
import styled from 'styled-components';
interface IToggleButtonProps {
  setTheme: Function;
}
const ToggleSlider: React.FC<IToggleButtonProps> = ({ setTheme }) => {
  const [toggle, setToggle] = useState<boolean>(true);
  const onClickHandler = () => {
    setToggle(!toggle);
    setTheme((prev: boolean) => !prev);
  };
  return (
    <SwitchLabel htmlFor={TOGGLE_THEME}>
      <StyledInput
        type={CHECK_BOX}
        id={TOGGLE_THEME}
        onChange={onClickHandler}
        checked={toggle}
      />
      <SliderRound toggle={toggle} />
    </SwitchLabel>
  );
};
const SwitchLabel = styled.label`
  position: relative;
  display: inline-block;
  width: 30px;
  height: 1em;
  cursor: pointer;
  margin: 0 0.3em;
`;
const StyledInput = styled.input`
  opacity: 0;
  width: 0;
  height: 0;
`;
const SliderRound = styled.span<{ toggle: boolean }>`
  border-radius: 34px;
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: ${props => (props.toggle ? '#89d99f' : 'tomato')};
  box-shadow: inset 0 3px 5px ${props => props.theme.color.normalAlpha};
  transition: 0.4s;
  &:before {
    border-radius: 50%;
    position: absolute;
    content: '';
    height: 1em;
    width: 1em;
    background-color: white;
    transform: ${props => (props.toggle ? 'none' : 'translateX(100%)')};
    box-shadow: 0 3px 5px ${props => props.theme.color.normalAlpha};
    border: 1px ${props => props.theme.color.normalAlpha};
    transition: 0.4s;
  }
`;
const [TOGGLE_THEME, CHECK_BOX] = ['toggleTheme', 'checkbox'];
export default ToggleSlider;
