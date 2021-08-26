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
  const dataMap = (todo: ITodo[] | null, filter: ITodo[] | null): ITodo[] | null => {
    if (!filter) return todo
    else return filter
  }

  return (
    <Body>
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

const Body = styled.section`
  height: 60vh;
  border: 5px solid #80c683;
  padding: 50px;
  display: flex;
  flex-direction: column;
  border-radius: 0px 0px 20px 20px;
  overflow-y: auto;
`;
