import React from 'react';

interface ISelect {
   value: string;
   handleChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const Select: React.FC<ISelect> = ({ value, handleChange }) => {

   return (
      <>
         <select value={value} onChange={handleChange} >
            <option>전체</option>
            <option>완료</option>
            <option>진행중</option>
            <option>시작안함</option>
         </select>
      </>
   )
}

export default Select;