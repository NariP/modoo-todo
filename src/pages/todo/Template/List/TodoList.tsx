import React from 'react';
import styled from 'styled-components';
import TodoItem from 'pages/todo/Template/List/Item/TodoItem';
import { ITodo } from 'utils/localStorageHelper';

interface ITodoList {
  todos: ITodo[] | null;
  filter: ITodo[] | null;
  setTodos: (todos: ITodo[] | null) => void;
}

const TodoList: React.FC<ITodoList> = ({ todos, filter, setTodos }) => {
  const dataMap = (
    todo: ITodo[] | null,
    filter: ITodo[] | null,
  ): ITodo[] | null => {
    if (!filter) return todo;
    else return filter;
  };

  return (
    <Body>
      <RowHead>
        <Task>목록</Task>
        <Sort>중요도</Sort>
        <StatusSort>상태</StatusSort>
      </RowHead>
      {dataMap(todos, filter)?.map((todo, i) => (
        <TodoItem
          key={i}
          todos={todos}
          todo={todo}
          setTodos={setTodos}
          idx={i}
        />
      ))}
    </Body>
  );
};

export default TodoList;

const RowHead = styled.div`
  width: 100%;
  display: flex;
  font-size: 0.8em;
  color: ${props => props.theme.color.secondaryText};
  margin-bottom: 10px;
  text-align: center;
  padding: 0 20px;
`;

const Task = styled.div`
  width: 60%;
`;

const Sort = styled.div`
  width: 10%;
  margin-right: 9px;
`;
const StatusSort = styled.div`
  width: 10%;
`;

const Body = styled.section`
  min-height: 50vh;
  padding: 10px;
  display: flex;
  flex-direction: column;
  border-radius: 0px 0px 20px 20px;
  overflow-y: auto;
`;
