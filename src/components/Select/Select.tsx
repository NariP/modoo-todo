import React from 'react';
import { selectList } from 'utils/constants/Status';

interface ISelect {
   value: string;
   handleChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const Select: React.FC<ISelect> = ({ value, handleChange }) => {
   return (
      <select value={value} onChange={handleChange} >
         {selectList.map(option => {
            return <option key={option}>{option}</option>
         })}
      </select>
   )
}

export default Select;