import React, { useState, useRef, useEffect } from 'react';
import TodoPresenter from 'pages/todo/TodoPresenter';
import { localStorageHelper, getFormattedDate } from 'utils';
import { ITodo } from 'utils/localStorageHelper';
import { LS_KEY } from 'utils/constants';
import { IMPORTANT, STATUS } from 'utils/constants/Status';

const TodoContainer: React.FC = () => {
  const [todos, setTodos] = useState<ITodo[] | null>(
    localStorageHelper.getItem(LS_KEY.TODOS),
  );
  const [todo, setTodo] = useState<string>('');
  const [filter, setFilter] = useState<ITodo[] | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const onChangeTodo = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodo(e.target.value);
  };

  const validateTodo = (): boolean => {
    const validatedTodo = todo.trim();
    if (validatedTodo === '') {
      inputRef.current?.focus();
      return false;
    }
    return true;
  };

  const setDate = (date: Date): string => {
    return getFormattedDate(date);
  };

  const updateTodos = (): void => {
    const newTodo: ITodo = {
      id: Date.now(),
      taskName: todo,
      status: STATUS.NOT_STARTED,
      createdAt: setDate(new Date()),
      updatedAt: '미정',
      important: IMPORTANT.MIDDLE,
    };
    todos ? setTodos([...todos, { ...newTodo }]) : setTodos([{ ...newTodo }]);
  };

  const updateStorage = (todos: ITodo[] | null): void => {
    todos && localStorageHelper.setItem(LS_KEY.TODOS, todos);
  };

  const addTodo = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateTodo()) return;
    updateTodos();
    setTodo('');
  };

  useEffect(() => {
    updateStorage(todos);
    inputRef.current?.focus();
  }, [todos]);

  return (
    <TodoPresenter
      todos={todos}
      setTodos={setTodos}
      todo={todo}
      onChangeTodo={onChangeTodo}
      addTodo={addTodo}
      inputRef={inputRef}
      filter={filter}
      setFilter={setFilter}
    />
  );
};

export default TodoContainer;
