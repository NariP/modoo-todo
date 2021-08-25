import React, { useEffect, useState } from 'react';
import mockData from 'utils/mockData.json';
import { Select } from 'components/Select';
import { MyDatePicker } from 'components/DatePicker';
import { SELECT, STATUS } from 'utils/constants/Status';
import styled from 'styled-components';
import {
  filterStatus,
  filterDate,
  OriginData,
  filterAll,
} from 'utils/dataFiltering';

const TodoFilter = () => {
  const [select, setSelect] = useState<string>('전체');
  const [startDate, setStartDate] = useState<null | Date>(null);
  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelect(e.target.value);
  };
  const handleDate = (e: Date) => {
    setStartDate(e);
  };
  useEffect(() => {
    if (select === '전체' && !startDate) {
      console.log(OriginData(mockData));
    }
    // 상태 필터
    else if (select !== '전체' && !startDate) {
      console.log(filterStatus(select, mockData));
    }
    // 생성일 필터
    else if (select === '전체' && startDate) {
      console.log(filterDate(startDate, mockData));
    }
    // 상태, 생성일 필터
    else {
      console.log(filterAll(select, startDate, mockData));
    }
  }, [select, startDate]);

  return (
    <FilterLayout>
      <Contents>
        <Text>상태</Text>
        <Select value={select} selectList={SELECT.STATUS} handleChange={handleSelect} />
      </Contents>
      <Contents>
        <Text>중요도</Text>
        <Select value={select} selectList={SELECT.IMPORTANT} handleChange={handleSelect} />
      </Contents>
      <Contents>
        <Text>생성일</Text>
        <MyDatePicker date={startDate} handleChange={handleDate} />
      </Contents>

    </FilterLayout>
  );
};

const FilterLayout = styled.div`
  width: 100%;
  height:80%;
  display: flex;
  background-color: #81c784;
`;

const Contents = styled.div`
  width: 20%;
  height:100%; 
  display: flex;
  flex-direction:column;
  justify-content: space-around;
  margin-right:10px;
  /* text-align */
`;
const Text = styled.text`
  height:100%;
  display:flex;
  font-size: 14px;
  align-items:flex-end;
  font-weight:600;
  padding-bottom: 5px;
`

export default TodoFilter;
