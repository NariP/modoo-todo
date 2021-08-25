import React, { useState, useRef } from 'react';
import TodoPresenter from 'pages/todo/TodoPresenter';
import { localStorageHelper } from 'utils';
import { ITodo } from 'utils/localStorageHelper';
import { LS_KEY } from 'utils/constants';

const TodoContainer: React.FC = () => {
  const todos: ITodo[] | null = localStorageHelper.getItem('todos');
  const [resetTodos, setResetTodos] = useState<ITodo[] | null>(todos);
  const [todo, setTodo] = useState<string>('');
  const inputRef = useRef<HTMLInputElement>(null);

  const onChangeTodo = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodo(e.target.value);
  };

  const addTodo = (
    e: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLElement>,
  ) => {
    if (todo === '') {
      console.log(resetTodos);
      inputRef.current?.focus();
      return;
    }
    e.preventDefault();
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
    if (inputRef.current) {
      inputRef.current.value = '';
      setTodo('');
    }
    setResetTodos(todos);
  };

  return (
    <TodoPresenter
      todos={todos}
      onChangeTodo={onChangeTodo}
      addTodo={addTodo}
      inputRef={inputRef}
      setResetTodos={setResetTodos}
    />
  );
};

export default TodoContainer;
