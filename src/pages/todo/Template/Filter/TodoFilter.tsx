import React, { useEffect, useState } from 'react';
import mockData from 'utils/mockData.json';
import { Select } from 'components/Select';
import { MyDatePicker } from 'components/DatePicker';
import { SELECT } from 'utils/constants';
import styled from 'styled-components';
import { ITodo } from 'utils/localStorageHelper';

import {
  filterStatus,
  filterDate,
  filterAll,
} from 'utils/dataFiltering';

interface ITodoFilter {
  todos: ITodo[] | null;
  filter: ITodo[] | null;
  setFilter: (todos: ITodo[] | null) => void;
}

const TodoFilter: React.FC<ITodoFilter> = ({ todos, filter, setFilter }) => {
  const [select, setSelect] = useState<string>('전체');
  const [createDate, setCreateDate] = useState<null | Date>(null);
  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelect(e.target.value);
  };
  const handleDate = (e: Date) => {
    setCreateDate(e);
  };
  useEffect(() => {
    if (select === '전체' && !createDate) {
      todos && setFilter(null);
    }
    // 상태 필터
    else if (select !== '전체' && !createDate) {
      todos && console.log(filterStatus(select, todos));
    }
    // 생성일 필터
    else if (select === '전체' && createDate) {
      todos && setFilter(filterDate(createDate, todos));
    }
    // 상태, 생성일 필터
    else {
      console.log(filterAll(select, createDate, mockData));
    }
  }, [select, createDate]);

  return (
    <FilterLayout>
      <Contents>
        <Text htmlFor="status">상태</Text>
        <Select id={"status"} value={select} selectList={SELECT.STATUS} handleChange={handleSelect} />
      </Contents>
      <Contents>
        <Text htmlFor="important">중요도</Text>
        <Select id={"important"} value={select} selectList={SELECT.IMPORTANT} handleChange={handleSelect} />
      </Contents>
      <Contents>
        <Text htmlFor="createDate">생성일</Text>
        <MyDatePicker id={"createDate"} date={createDate} handleChange={handleDate} />
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
`;
const Text = styled.label`
  height:100%;
  display:flex;
  font-size: 14px;
  align-items:flex-end;
  font-weight:600;
  padding-bottom: 5px;
`

export default TodoFilter;
