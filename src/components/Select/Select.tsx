import React from 'react';
import styled from 'styled-components';


interface ISelect {
   id: string;
   value: string;
   selectList: string[];
   handleChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}


const Select: React.FC<ISelect> = ({ id, value, handleChange, selectList }) => {
   return (
      <MySelect id={id} value={value} onChange={handleChange} >
         {selectList.map(option => {
            return <option key={option}>{option}</option>
         })}
      </MySelect>
   )
}

const MySelect = styled.select`
   border:none;
   border-radius:3px;
   outline:none;
   font-size:14px;
   padding: 1px;
`

export default Select;