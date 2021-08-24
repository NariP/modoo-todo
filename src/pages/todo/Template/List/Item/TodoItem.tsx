import React from 'react';
import styled from 'styled-components';
import localStorageHelper, { ITodo } from 'utils/localStorageHelper';

interface ITodoItem {
  todo: ITodo | null;
  setResetTodos: (todos: ITodo[] | null) => void;
}

const TodoItem: React.FC<ITodoItem> = ({ todo, setResetTodos }) => {
  const deleteItem = () => {
    const id = todo?.id;
    // const todos =
    const todos = localStorageHelper
      ?.getItem('todos')
      ?.filter(todo => todo.id !== id);
    todos && localStorageHelper.setItem('todos', [...todos]);
    todos && setResetTodos(todos);
  };

  return (
    <Row>
      <ItemWrapper>
        <Checkbox></Checkbox>
        <Item>{todo?.taskName}</Item>
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
