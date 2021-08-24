import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import mockData from 'utils/mockData.json';
import { Select } from 'components/Select';
import { MyDatePicker } from 'components/DatePicker';
import styled from 'styled-components';
import { filterStatus, filterDate, OriginData, filterAll } from 'utils/filterStatus';

const TodoContainer = () => {
  const [select, setSelect] = useState<string>("전체")
  const [startDate, setStartDate] = useState<null | Date>(null);
  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelect(e.target.value)
  }
  const handleDate = (e: Date) => {
    setStartDate(e)
  }
  useEffect(() => {
    if (select === "전체" && !startDate) {
      console.log(OriginData(mockData))
    }
    else if (select !== "전체" && !startDate) {
      console.log(filterStatus(select, mockData))
    }
    else if (select === "전체" && startDate) {
      console.log(filterDate(startDate, mockData))
    }
    else {
      console.log(filterAll(select, startDate, mockData))
    }
  }, [select, startDate])

  return (
    <>
      <FilterLayout>
        <Contents>
          <Select value={select} handleChange={handleSelect} />
          <MyDatePicker date={startDate} handleChange={handleDate} />
        </Contents>
      </FilterLayout>
    </>
  );
};

const FilterLayout = styled.div`
  width:100%;
  display:flex;
`
const Contents = styled.div`
  width:30%;
  display:flex;
  align-items:center;
  justify-content:space-around;
`


export default TodoContainer;
