import React, { useRef } from 'react';
import styled from 'styled-components';
import { LS_KEY } from 'utils/constants';
import localStorageHelper, { ITodo } from 'utils/localStorageHelper';

interface ITodoItem {
  todos: ITodo[] | null;
  todo: ITodo | null;
  setTodos: (todos: ITodo[]) => void;
  idx: number;
}

const TodoItem: React.FC<ITodoItem> = ({ todos, todo, setTodos, idx }) => {
  const deleteItem = () => {
    const id = todo?.id;
    const todos = localStorageHelper
      ?.getItem(LS_KEY.TODOS)
      ?.filter(todo => todo.id !== id);
    todos && localStorageHelper.setItem(LS_KEY.TODOS, [...todos]);
    todos && setTodos(todos);
  };

  let endIdx = useRef<number | null>();

  const onDragStart = (e: React.DragEvent<HTMLElement>) => {
    e.dataTransfer.setData('idx', String(idx + 1));
  };

  const onDragOver = (e: React.DragEvent<HTMLElement> | any) => {
    e.preventDefault();
    endIdx.current = Number(e.target.id) + 1;
  };

  const onDrop = (e: React.DragEvent<HTMLElement>) => {
    const idx = Number(e.dataTransfer.getData('idx'));
    const newArr: ITodo[] | null = todos && [...todos];
    if (newArr && todos && endIdx.current) {
      newArr[idx - 1] = todos[endIdx.current - 1];
      newArr[endIdx.current - 1] = todos[idx - 1];
      setTodos(newArr);
    }
  };

  return (
    <Row
      draggable
      onDragStart={onDragStart}
      onDragOver={onDragOver}
      onDrop={onDrop}
      id={String(idx)}
    >
      <ItemWrapper id={String(idx)}>
        <Checkbox id={String(idx)}></Checkbox>
        <Item id={String(idx)}>{todo?.taskName}</Item>
      </ItemWrapper>
      <DeleteBtn id={String(todo?.id)} onClick={deleteItem}>
        <i className="fas fa-trash-alt" />
      </DeleteBtn>
    </Row>
  );
};

export default TodoItem;

const Row = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 20px;
  margin: 0;
  box-shadow: 2px 2px 2px #00000020;
`;

const ItemWrapper = styled.li`
  width: 90%;
  display: flex;
  align-items: center;
`;

const Item = styled.div`
  width: 100%;
  font-size: 25px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const DeleteBtn = styled.button`
  font-size: 22px;
  background-color: transparent;
  transition: transform 200ms ease-in;
  :hover {
    transform: scale(1.2);
  }
`;

const Checkbox = styled.button`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 2px solid gray;
  background-color: transparent;
  margin-right: 25px;
`;
