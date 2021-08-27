import React, { useRef, useState } from 'react';
import styled from 'styled-components';

interface IDropdownProps {
  visibleOption: React.ReactNode;
  optionList: string[];
  onItemClick: Function;
  print: Function;
  name: string;
}
const Dropdown: React.FC<IDropdownProps> = ({
  visibleOption,
  optionList,
  onItemClick,
  print = (data: string) => data,
  name,
}) => {
  const listRef = useRef<HTMLUListElement>(null);
  const [visible, setVisible] = useState(false);

  const handleItemClick = (value: string) => {
    onItemClick(value, name);
    setVisible(!visible);
  };

  return (
    <DropdownContainer>
      <DropdownHeader visible={visible} onClick={() => setVisible(!visible)}>
        {visibleOption}
      </DropdownHeader>
      <DropdownList ref={listRef} visible={visible}>
        {optionList.map(value => (
          <DropdownItem key={value} onClick={() => handleItemClick(value)}>
            {print(value)}
          </DropdownItem>
        ))}
      </DropdownList>
    </DropdownContainer>
  );
};

export default Dropdown;

const DropdownContainer = styled.div`
  position: relative
  }
`;

const DropdownHeader = styled.div<{ visible: boolean }>`
  background: ${props => props.theme.color.bgColor};
  box-shadow: 0 3px 3px ${props => props.theme.color.normalAlpha};
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 4px;
  font-size: 14px;
  border-radius: 4px;
  :hover {
    cursor: pointer;
  }
  & > i {
    font-size: 6px;
    transform: ${({ visible }) => (visible ? 'rotate(0.5turn)' : 'none')};
    transition: transform 0.5s ease;
  }
`;

const DropdownList = styled.ul<{ visible: boolean }>`
  display: ${({ visible }) => (visible ? 'block' : 'none')};
  // display: none;
  align-items: center;
  width: 100%;
  border-radius: 5px;
  z-index: 99;
  background: ${props => props.theme.color.bgColor};
  color: ${props => props.theme.color.textColor};
  border: 0.5px solid ${props => props.theme.color.normalAlpha};
  box-shadow: 0 3px 5px ${props => props.theme.color.normalAlpha};
  position: absolute;
  top: 7px;
  padding: 4px 0 4px 0;
  &:li {
    border-bottom: 2px solid ${props => props.theme.color.normalAlpha};
  }
`;

const DropdownItem = styled.li`
  font-size: 14px;
  padding: 2px;
  width: inherit;
  text-align: center;
  :hover {
    cursor: pointer;
    background-color: #dce35b33;
  }
`;
