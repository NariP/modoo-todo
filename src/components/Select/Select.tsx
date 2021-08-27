import React from 'react';
import styled from 'styled-components';

interface ISelect {
  id: string;
  selectList: string[];
  handleChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const Select: React.FC<ISelect> = ({ id, handleChange, selectList }) => {
  return (
    <MySelect id={id} onChange={handleChange}>
      {selectList.map(option => {
        return (
          <option key={option} value={option}>
            {option}
          </option>
        );
      })}
    </MySelect>
  );
};

const MySelect = styled.select`
  background: ${props => props.theme.color.bgColor};
  color: ${props => props.theme.color.textColor};
  border: 1px solid ${props => props.theme.color.normalAlpha};
  box-shadow: 0 1px 5px ${props => props.theme.color.normalAlpha};
  border-radius: 3px;
  outline: none;
  font-size: 14px;
  padding: 1px;
`;

export default Select;
