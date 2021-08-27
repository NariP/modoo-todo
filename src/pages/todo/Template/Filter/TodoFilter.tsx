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
  getFilteredData,
} from 'utils/dataFiltering';

interface ITodoFilter {
  todos: ITodo[] | null;
  filter: ITodo[] | null;
  setFilter: (todos: ITodo[] | null) => void;
}
// [{option, select}]
interface ISelected {
  option: string;
  select: string | Date | null;
}
const TodoFilter: React.FC<ITodoFilter> = ({ todos, filter, setFilter }) => {
  const [select, setSelect] = useState<string>('전체');
  const [option, setOption] = useState('');
  const [createDate, setCreateDate] = useState<null | Date>(null);
  const [selected, setSelected] = useState<[] | ISelected[]>([]);
  const getUnique = (
    optionName: string,
    selected: [] | ISelected[],
  ): [] | ISelected[] => {
    return !selected
      ? selected
      : selected.filter(item => item.option !== optionName);
  };

  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelect(e.target.value);
    setOption(e.target.id);
    const res = getUnique(e.target.id, selected);
    setSelected([...res, { option: e.target.id, select: e.target.value }]);
  };
  const handleDate = (
    date: Date,
    event: React.SyntheticEvent<any, Event> | undefined,
  ) => {
    setCreateDate(date);
    const res = getUnique('createdAt', selected);
    setSelected([...res, { option: 'createdAt', select: date }]);
  };
  useEffect(() => {
    todos && console.log(getFilteredData(option, select, createDate, mockData));
    console.log({ selected });
    // if (select === '전체' && !createDate) {
    //   todos && setFilter(null);
    // }
    // // 상태 필터
    // else if (select !== '전체' && !createDate) {
    //   todos && console.log(filterStatus(select, mockData));
    // }
    // // 생성일 필터
    // else if (select === '전체' && createDate) {
    //   todos && setFilter(filterDate(createDate, mockData));
    // }
    // // 상태, 생성일 필터
    // else {
    //   console.log(filterAll(select, createDate, mockData));
    // }
  }, [select, createDate]);

  return (
    <FilterLayout>
      <Contents>
        <Text htmlFor="status">상태</Text>
        <Select
          id="status"
          value={select}
          selectList={SELECT.STATUS}
          handleChange={handleSelect}
        />
      </Contents>
      <Contents>
        <Text htmlFor="important">중요도</Text>
        <Select
          id="important"
          value={select}
          selectList={SELECT.IMPORTANT}
          handleChange={handleSelect}
        />
      </Contents>
      <Contents>
        <Text htmlFor="createdAt">생성일</Text>
        <MyDatePicker
          id="createdAt"
          date={createDate}
          handleChange={handleDate}
        />
      </Contents>
    </FilterLayout>
  );
};

const FilterLayout = styled.div`
  width: 100%;
  height: 80%;
  display: flex;
  background-color: #81c784;
`;

const Contents = styled.div`
  width: 20%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-right: 10px;
`;
const Text = styled.label`
  height: 100%;
  display: flex;
  font-size: 14px;
  align-items: flex-end;
  font-weight: 600;
  padding-bottom: 5px;
`;

export default TodoFilter;
