import React, { useState, useEffect, useRef } from 'react';
import TodoPresenter from 'pages/Todo/TodoPresenter';
import { localStorageHelper } from 'utils';
import { ITodo } from 'utils/localStorageHelper';

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
      alert('내용을 입력하세요');
      return;
    }
    e.preventDefault();
    todos
      ? localStorageHelper.setItem('todos', [
          ...todos,
          {
            id: Date.now(),
            taskName: todo,
            status: '미정',
            createdAt: String(new Date()),
            updatedAt: '미정',
          },
        ])
      : localStorageHelper.setItem('todos', [
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

  useEffect(() => {
    console.log(resetTodos);
    inputRef.current?.focus();
  }, []);

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
