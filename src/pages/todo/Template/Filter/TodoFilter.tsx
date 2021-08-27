import React, { useEffect, useState, useCallback } from 'react';
import { Select } from 'components/Select';
import { MyDatePicker } from 'components/DatePicker';
import { SELECT } from 'utils/constants';
import styled from 'styled-components';
import { ITodo } from 'utils/localStorageHelper';
import {
  filterStatus,
  filterDate,
  filterImport,
  filterAll,
  filterSatusImport,
  filterImportDate,
  filterStatusDate,
} from 'utils/dataFiltering';

interface ITodoFilter {
  todos: ITodo[] | null;
  filter: ITodo[] | null;
  setFilter: (todos: ITodo[] | null) => void;
}

const TodoFilter: React.FC<ITodoFilter> = ({ todos, filter, setFilter }) => {
  const [select, setSelect] = useState<string>('전체');
  const [important, setImportant] = useState<string>('전체');
  const [createDate, setCreateDate] = useState<null | Date>(null);
  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelect(e.target.value);
  };
  const handleDate = (e: Date) => {
    setCreateDate(e);
  };

  const handleImport = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setImportant(e.target.value);
  };

  const innerFunction = useCallback(() => {
    // 필터 X
    if (select === '전체' && important === '전체' && !createDate) {
      todos && setFilter(null);
      return null
    }
    // 상태
    else if (select !== '전체' && important === '전체' && !createDate) {
      todos && setFilter(filterStatus(select, todos));
    }
    // 생성일
    else if (select === '전체' && important === '전체' && createDate) {
      todos && setFilter(filterDate(createDate, todos));
    }
    // 중요도
    else if (select === '전체' && important !== '전체' && !createDate) {
      todos && setFilter(filterImport(important, todos));
    }
    // 상태, 중요도
    else if (select !== '전체' && important !== '전체' && !createDate) {
      todos && setFilter(filterSatusImport(select, important, todos))
    }
    // 중요도, 생성일
    else if (select === '전체' && important !== '전체' && createDate) {
      todos && setFilter(filterImportDate(important, createDate, todos))
    }
    // 상태, 생성일
    else if (select !== '전체' && important === '전체' && createDate) {
      todos && setFilter(filterStatusDate(select, createDate, todos))
    }
    // 모두
    else {
      todos && setFilter(filterAll(select, important, createDate, todos));
    }
  }, [select, createDate, important, setFilter, todos]);

  useEffect(() => {
    innerFunction()
  }, [innerFunction]);

  return (
    <FilterLayout>
      <Contents>
        <Text htmlFor="status">상태</Text>
        <Select id={"status"} value={select} selectList={SELECT.STATUS} handleChange={handleSelect} />
      </Contents>
      <Contents>
        <Text htmlFor="important">중요도</Text>
        <Select id={"important"} value={important} selectList={SELECT.IMPORTANT} handleChange={handleImport} />
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
