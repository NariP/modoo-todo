import React from 'react';
import styled from 'styled-components';
import TodoItem from 'pages/todo/Template/List/Item/TodoItem';
import TodoFilter from 'pages/todo/Template/Filter/TodoFilter';
import { ITodo } from 'utils/localStorageHelper';

interface ITodoList {
  todos: ITodo[] | null;
  setTodos: (todos: ITodo[]) => void;
}

const TodoList: React.FC<ITodoList> = ({ todos, setTodos }) => {
  return (
    <Body>
      <TodoFilter />
      {todos?.map((todo, i) => (
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
