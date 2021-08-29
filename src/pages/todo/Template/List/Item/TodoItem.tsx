import React, { useRef } from 'react';
import styled from 'styled-components';
import { LS_KEY } from 'utils/constants';
import localStorageHelper from 'utils/localStorageHelper';
import TodoSelector from './Selector/TodoSelector';
import { Icon } from 'components/Icon';
import { ITodo } from 'pages/todo/utils/useTodoService';

interface ITodoItem {
  todos: ITodo[] | null;
  todo: ITodo | null;
  setTodos: (todos: ITodo[]) => void;
  idx: number;
  toggleModal: () => void;
  setTodoContext: Function;
  setClickedIdx: Function;
}

const TodoItem: React.FC<ITodoItem> = ({
  todos,
  todo,
  setTodos,
  idx,
  toggleModal,
  setTodoContext,
  setClickedIdx,
}) => {
  const deleteItem = (): void => {
    const left = todos?.filter(item => item.id !== todo?.id) ?? [];
    setTodos(left);
    localStorageHelper.setItem(LS_KEY.TODOS, left);
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

  const getRealIdx = () => {
    return todos?.findIndex(({ id }) => id === todo?.id) ?? -1;
  };

  const clickHandler = () => {
    toggleModal();
    setTodoContext(todo);
    setClickedIdx(getRealIdx());
  };

  return (
    <>
      <Row
        draggable
        onDragStart={onDragStart}
        onDragOver={onDragOver}
        onDrop={onDrop}
        id={String(idx)}
      >
        <ItemWrapper onClick={clickHandler} id={String(idx)}>
          <Item id={String(idx)}>{todo?.taskName}</Item>
        </ItemWrapper>
        <TodoSelector
          todos={todos}
          todo={todo}
          setTodos={setTodos}
          idx={getRealIdx()}
        />
        <DeleteBtn id={String(todo?.id)} onClick={deleteItem}>
          <Icon classes="fas fa-trash-alt" />
        </DeleteBtn>
      </Row>
    </>
  );
};

export default TodoItem;

const Row = styled.ul`
  display: flex;
  align-items: center;
  padding: 15px 10px 15px 20px;
  margin: 0;
  border-radius: 10px;
  border: 1px solid ${props => props.theme.color.normalAlpha};
  box-shadow: 0 3px 5px ${props => props.theme.color.normalAlpha};
  margin-bottom: 10px;
  &:hover {
    transform: scale(1.01);
    transition: all 200ms ease-in;
  }
`;

const ItemWrapper = styled.li`
  width: 60%;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const Item = styled.div`
  width: 100%;
  font-size: 1.1em;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const DeleteBtn = styled.button`
  width: 5%;
  font-size: 15px;
  color: ${props => props.theme.color.textColor};

  transition: transform 200ms ease-in;
  :hover {
    transform: scale(1.2);
    color: ${props => props.theme.color.normalAlpha};
  }
`;
