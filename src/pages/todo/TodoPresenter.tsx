import React, { RefObject } from 'react';
import styled from 'styled-components';
import TodoHead from 'pages/todo/Template/Head/TodoHead';
import TodoList from 'pages/todo/Template/List/TodoList';
import { ITodo } from 'utils/localStorageHelper';

interface ITodoPresenter {
  todos: ITodo[] | null;
  todo: string;
  filter: ITodo[] | null;
  setFilter: (todos: ITodo[] | null) => void;
  addTodo: (e: React.FormEvent<HTMLFormElement>) => void;
  onChangeTodo: (e: React.ChangeEvent<HTMLInputElement>) => void;
  inputRef: RefObject<HTMLInputElement>;
  setTodos: (todos: ITodo[] | null) => void;
}

const TodoPresenter: React.FC<ITodoPresenter> = ({
  todos,
  todo,
  addTodo,
  onChangeTodo,
  inputRef,
  setTodos,
  filter,
  setFilter,
}) => {
  return (
    <Wrapper>
      <TodoHead
        addTodo={addTodo}
        todo={todo}
        onChangeTodo={onChangeTodo}
        inputRef={inputRef}
        todos={todos}
        filter={filter}
        setFilter={setFilter}
      />
      <TodoList todos={todos} setTodos={setTodos} filter={filter} />
      <Footer>{todos?.length} Left</Footer>
    </Wrapper>
  );
};

export default TodoPresenter;

const Wrapper = styled.article`
  width: 100%;
  max-height: 88vh;
  display: flex;
  flex-direction: column;
  border: 1px solid ${props => props.theme.color.normalAlpha};
  box-shadow: 0 5px 10px ${props => props.theme.color.normalAlpha};
  border-radius: 20px;
  overflow-x: hidden;
  padding: 10px 20px;
`;
const Footer = styled.footer`
  color: ${props => props.theme.color.secondaryText};
  font-size: 0.8em;
  align-self: center;
  border-top: 1px solid ${props => props.theme.color.normalAlpha};
  padding-top: 10px;
`;
