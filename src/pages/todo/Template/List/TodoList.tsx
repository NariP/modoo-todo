import React from 'react';
import styled from 'styled-components';
import TodoItem from 'pages/Todo/Template/List/Item/TodoItem';
import TodoFilter from 'pages/Todo/Template/Filter/TodoFilter';
import { ITodo } from 'utils/localStorageHelper';

interface ITodoList {
  todos: ITodo[] | null;
  setResetTodos: (todos: ITodo[] | null) => void;
}

const TodoList: React.FC<ITodoList> = ({ todos, setResetTodos }) => {
  return (
    <Body>
      <TodoFilter />
      {todos?.map((todo, i) => (
        <TodoItem key={i} todo={todo} setResetTodos={setResetTodos} />
      ))}
    </Body>
  );
};

export default TodoList;

const Body = styled.section`
  height: 800px;
  border: 5px solid #80c683;
  padding: 50px;
  display: flex;
  flex-direction: column;
  border-radius: 0px 0px 20px 20px;
`;
