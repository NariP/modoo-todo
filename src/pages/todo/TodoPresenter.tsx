import React, { RefObject } from 'react';
import styled from 'styled-components';
import TodoHead from 'pages/Todo/Template/Head/TodoHead';
import TodoList from 'pages/Todo/Template/List/TodoList';
import { ITodo } from 'utils/localStorageHelper';

interface ITodoPresenter {
  todos: ITodo[] | null;
  addTodo: (
    e: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLElement>,
  ) => void;
  onChangeTodo: (e: React.ChangeEvent<HTMLInputElement>) => void;
  inputRef: RefObject<HTMLInputElement>;
  setResetTodos: (todos: ITodo[] | null) => void;
}

const TodoPresenter: React.FC<ITodoPresenter> = ({
  todos,
  addTodo,
  onChangeTodo,
  inputRef,
  setResetTodos,
}) => {
  return (
    <Wrapper>
      <TodoHead
        addTodo={addTodo}
        onChangeTodo={onChangeTodo}
        inputRef={inputRef}
      />
      <TodoList todos={todos} setResetTodos={setResetTodos} />
    </Wrapper>
  );
};

export default TodoPresenter;

const Wrapper = styled.article`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
