import React, { useState, useRef, useEffect } from 'react';
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

  const validateTodo = (): boolean => {
    const validatedTodo = todo.trim();
    if (validatedTodo === '') {
      return false;
    }
    return true;
  };

  const setDate = (): string => {
    const date = String(new Date()).split(' ').slice(0, 3).join(' ');
    return date;
  };

  const updateTodos = (): void => {
    const newTodo: ITodo = {
      id: Date.now(),
      taskName: todo,
      status: '미정',
      createdAt: setDate(),
      updatedAt: '미정',
    };
    todos ? setTodos([...todos, { ...newTodo }]) : setTodos([{ ...newTodo }]);
  };

  const updateStorage = (): void => {
    todos && localStorageHelper.setItem(LS_KEY.TODOS, todos);
  };

  const addTodo = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateTodo()) return;
    updateTodos();
    updateStorage();
    setTodo('');
    if (inputRef.current) {
      inputRef.current.value = '';
    }
  };

  useEffect(() => {
    inputRef.current?.focus();
  }, [todos]);

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
