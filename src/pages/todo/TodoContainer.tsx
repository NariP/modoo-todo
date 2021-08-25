import React, { useState, useRef } from 'react';
import TodoPresenter from 'pages/todo/TodoPresenter';
import { localStorageHelper } from 'utils';
import { ITodo } from 'utils/localStorageHelper';
import { LS_KEY } from 'utils/constants';

const TodoContainer: React.FC = () => {
  const [todos, setTodos] = useState<ITodo[] | null>(
    localStorageHelper.getItem(LS_KEY.TODOS),
  );
  const [todo, setTodo] = useState<string>('');
  const inputRef = useRef<HTMLInputElement>(null);

  const onChangeTodo = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodo(e.target.value);
  };

  const addTodo = (
    e: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLElement>,
  ) => {
    e.preventDefault();
    if (todo === '') {
      inputRef.current?.focus();
      return;
    }
    todos
      ? localStorageHelper.setItem(LS_KEY.TODOS, [
          ...todos,
          {
            id: Date.now(),
            taskName: todo,
            status: '미정',
            createdAt: String(new Date()),
            updatedAt: '미정',
          },
        ])
      : localStorageHelper.setItem(LS_KEY.TODOS, [
          {
            id: Date.now(),
            taskName: todo,
            status: '미정',
            createdAt: String(new Date()),
            updatedAt: '미정',
          },
        ]);
    const newTodos: ITodo[] | null = localStorageHelper.getItem(LS_KEY.TODOS);
    setTodos(newTodos);
    if (inputRef.current) {
      inputRef.current.value = '';
    }
  };

  return (
    <TodoPresenter
      todos={todos}
      onChangeTodo={onChangeTodo}
      addTodo={addTodo}
      inputRef={inputRef}
      setTodos={setTodos}
    />
  );
};

export default TodoContainer;
