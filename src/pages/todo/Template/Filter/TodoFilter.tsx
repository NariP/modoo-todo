import React, { useEffect, useState } from 'react';
import { Select } from 'components/Select';
import { MyDatePicker } from 'components/DatePicker';
import { SELECT } from 'utils/constants';
import styled from 'styled-components';
import { ITodo } from 'utils/localStorageHelper';
import { getUnique } from './utils';

import { getFilteredData } from 'utils/dataFiltering';
import { getFormattedDate } from 'utils';
import { Icon } from 'components/Icon';

interface ITodoFilter {
  todos: ITodo[] | null;
  filter: ITodo[] | null;
  setFilter: (todos: ITodo[] | null) => void;
}

export interface ISelected {
  option: string;
  select: string | Date | null;
}
const TodoFilter: React.FC<ITodoFilter> = ({ todos, filter, setFilter }) => {
  const [select, setSelect] = useState<string>('전체');
  const [createDate, setCreateDate] = useState<null | Date>(null);
  const [selected, setSelected] = useState<[] | ISelected[]>([]);

  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelect(e.target.value);
    const res = getUnique(e.target.id, selected);
    setSelected([...res, { option: e.target.id, select: e.target.value }]);
  };
  const handleDate = (date: Date) => {
    const formattedDate = getFormattedDate(date);
    setCreateDate(date);
    const res = getUnique('createdAt', selected);
    setSelected([...res, { option: 'createdAt', select: formattedDate }]);
  };
  const handleDateReset = () => {
    setCreateDate(null);
    const res = getUnique('createdAt', selected);
    setSelected([...res]);
  };

  useEffect(() => {
    todos && setFilter(getFilteredData(selected, todos));
  }, [select, createDate, selected, setFilter, todos]);

  return (
    <FilterLayout>
      <Contents>
        <Text htmlFor="status">상태</Text>
        <Select
          id="status"
          selectList={SELECT.STATUS}
          handleChange={handleSelect}
        />
      </Contents>
      <Contents>
        <Text htmlFor="important">중요도</Text>
        <Select
          id="important"
          selectList={SELECT.IMPORTANT}
          handleChange={handleSelect}
        />
      </Contents>
      <Contents>
        <Text htmlFor="createdAt">생성일</Text>
        <DateInput>
          <MyDatePicker
            id="createdAt"
            date={createDate}
            handleChange={handleDate}
          />
          {!!createDate && (
            <button type="button" onClick={handleDateReset}>
              <Icon classes="fa fa-times" />
            </button>
          )}
        </DateInput>
      </Contents>
    </FilterLayout>
  );
};
const DateInput = styled.div`
  display: flex;
  background: ${props => props.theme.color.bgColor};
  border-radius: 4px;
  i {
    font-size: 13px;
    color: ${props => props.theme.color.textColor};
  }
`;

const FilterLayout = styled.div`
  width: 100%;
  height: 80%;
  display: flex;
  justify-content: flex-end;
  background-color: inherit;
  padding: 20px 0 20px 0;
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
  font-size: 12px;
  align-items: flex-end;
  font-weight: 600;
  padding-bottom: 5px;
  color: ${props => props.theme.color.secondaryText};
`;

export default TodoFilter;
