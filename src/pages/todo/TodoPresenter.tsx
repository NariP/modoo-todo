import React, { RefObject } from 'react';
import styled from 'styled-components';
import TodoHead from 'pages/todo/Template/Head/TodoHead';
import TodoList from 'pages/todo/Template/List/TodoList';
import { ITodo } from 'utils/localStorageHelper';

interface ITodoPresenter {
  todos: ITodo[] | null;
  todo: string;
  addTodo: (e: React.FormEvent<HTMLFormElement>) => void;
  onChangeTodo: (e: React.ChangeEvent<HTMLInputElement>) => void;
  inputRef: RefObject<HTMLInputElement>;
  setTodos: (todos: ITodo[]) => void;
}

const TodoPresenter: React.FC<ITodoPresenter> = ({
  todos,
  todo,
  addTodo,
  onChangeTodo,
  inputRef,
  setTodos,
}) => {
  return (
    <Wrapper>
      <TodoHead
        addTodo={addTodo}
        todo={todo}
        onChangeTodo={onChangeTodo}
        inputRef={inputRef}
      />
      <TodoList todos={todos} setTodos={setTodos} />
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
