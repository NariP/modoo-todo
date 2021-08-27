import { FormEvent, ChangeEvent, useEffect, useRef, useState } from 'react';
import { LS_KEY } from 'utils/constants';
import { getFormattedDate, localStorageHelper } from 'utils';
import { IMPORTANT, STATUS } from 'utils/constants/Status';
export interface ITodo {
  id: number;
  taskName: string;
  status: string;
  createdAt: string;
  updatedAt: string;
  important: string;
  [key: string]: string | any;
}
const useTodoService = () => {
  const [todos, setTodos] = useState<ITodo[] | []>([]);
  const [todo, setTodo] = useState<string>('');

  const [filter, setFilter] = useState<ITodo[] | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const onChangeTodo = (e: ChangeEvent<HTMLInputElement>) => {
    setTodo(e.target.value);
  };

  const validateTodo = (): boolean => {
    if (!!todo.trim()) return true;
    inputRef.current?.focus();
    return false;
  };

  const updateStorage = (todos: ITodo[] | []): void => {
    localStorageHelper.setItem(LS_KEY.TODOS, todos);
  };

  const addTodo = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateTodo()) return;
    setTodos([
      ...todos,
      {
        ...newTodo,
        taskName: todo,
        id: Date.now(),
        createdAt: getFormattedDate(new Date()),
      },
    ]);
    setTodo('');
  };

  useEffect(() => {
    const localData = localStorageHelper.getItem(LS_KEY.TODOS);
    if (!localData) return;
    setTodos(localData);
  }, []);

  useEffect(() => {
    updateStorage(todos);
  }, [todos]);
  return {
    todos,
    setTodos,
    todo,
    onChangeTodo,
    addTodo,
    inputRef,
    filter,
    setFilter,
  };
};
const newTodo: ITodo = {
  id: -1,
  taskName: '',
  status: STATUS.NOT_STARTED,
  createdAt: '',
  updatedAt: '미정',
  important: IMPORTANT.MIDDLE,
};
export default useTodoService;
