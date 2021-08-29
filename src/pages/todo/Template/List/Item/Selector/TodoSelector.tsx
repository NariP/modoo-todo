import React, { useState } from 'react';
import styled from 'styled-components';
import { ITodo } from 'pages/todo/utils/useTodoService';
import { SELECT, IMPORTANT, STATUS } from 'utils/constants/Status';

interface ITodoSelector {
  todos: ITodo[] | null;
  todo: ITodo | null;
  setTodos: (todos: ITodo[]) => void;
  idx: number;
}

const TodoSelector: React.FC<ITodoSelector> = ({
  todos,
  todo,
  setTodos,
  idx,
}) => {
  const [showImportantSelector, setShowImportantSelector] =
    useState<boolean>(false);
  const [showStatusSelector, setShowStatusSelector] = useState<boolean>(false);

  const onImportantClick = (
    e: React.MouseEvent<HTMLDivElement> | any,
  ): void => {
    if (showImportantSelector && todo && todos) {
      const newTodo: ITodo = { ...todo, important: e.target.innerText };
      const newTodos: ITodo[] = [...todos];
      newTodos[idx] = newTodo;
      setTodos(newTodos);
    }
    setShowImportantSelector(prev => !prev);
  };

  const onStatusClick = (e: React.MouseEvent<HTMLDivElement> | any): void => {
    if (showStatusSelector && todo && todos) {
      const newTodo: ITodo = { ...todo, status: e.target.innerText };
      const newTodos: ITodo[] = [...todos];
      newTodos[idx] = newTodo;
      setTodos(newTodos);
    }
    setShowStatusSelector(prev => !prev);
  };

  return (
    <>
      {showStatusSelector && (
        <StatusSelector>
          {SELECT.STATUS.slice(1, 4)
            .reverse()
            .map(status => (
              <StatusOption onClick={onStatusClick} key={status} state={status}>
                {status}
              </StatusOption>
            ))}
        </StatusSelector>
      )}
      {showImportantSelector && (
        <StatusSelector>
          {SELECT.IMPORTANT.slice(1, 4)
            .reverse()
            .map(important => (
              <StatusOption
                onClick={onImportantClick}
                key={important}
                state={important}
              >
                {important}
              </StatusOption>
            ))}
        </StatusSelector>
      )}
      {!showImportantSelector && !showStatusSelector && (
        <StatusWrapper>
          <Status state={todo?.status} onClick={onStatusClick}>
            {todo?.status}
          </Status>
          <Status state={todo?.important} onClick={onImportantClick}>
            {todo?.important}
          </Status>
        </StatusWrapper>
      )}
    </>
  );
};

export default TodoSelector;

const StatusWrapper = styled.div`
  display: flex;
  width: 35%;
  font-weight: bold;
`;

const Status = styled.div<{ state?: string | null }>`
  width: 50px;
  text-align: center;
  margin-right: 10%;
  font-size: 13px;
  padding: 5px;
  border-radius: 15px;
  cursor: pointer;
  background-color: ${({ state }) => state && setColor(state)};
  color: #333;
`;

const StatusSelector = styled.div`
  display: flex;
  width: 30%;
  font-weight: bold;
`;

const StatusOption = styled.div<{ state?: string | null }>`
  width: 40px;
  text-align: center;
  margin-right: 2px;
  font-size: 13px;
  background-color: ${({ state }) => state && setColor(state)};
  padding: 5px;
  border-radius: 15px;
  cursor: pointer;
`;

const setColor = (status: string | null): string => {
  switch (status) {
    case IMPORTANT.LOW:
      return '#B4F8C8';
    case IMPORTANT.MIDDLE:
      return '#EEEDE7';
    case IMPORTANT.HIGH:
      return '#F8EA8C';
    case STATUS.NOT_STARTED:
      return '#D4F1F4';
    case STATUS.ONGOING:
      return '#FADCD9';
    case STATUS.FINISHED:
      return 'orange';
    default:
      return '#fff';
  }
};
