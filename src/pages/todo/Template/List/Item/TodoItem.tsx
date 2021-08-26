import { Modal } from 'components/Modal';
import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import { LS_KEY } from 'utils/constants';
import localStorageHelper, { ITodo } from 'utils/localStorageHelper';
import TodoSelector from './Selector/TodoSelector';

interface ITodoItem {
  todos: ITodo[] | null;
  todo: ITodo | null;
  setTodos: (todos: ITodo[]) => void;
  idx: number;
}

const TodoItem: React.FC<ITodoItem> = ({ todos, todo, setTodos, idx }) => {
  const [openModal, setOpenModal] = useState<boolean>(false);

  const toggleModal = () => {
    setOpenModal(prev => !prev);
  };

  const deleteItem = (): void => {
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
    <>
      <Modal open={openModal} toggleModal={toggleModal}>
        <ModalWrapper>
          <ModalHeader>
            <ModalBtn onClick={toggleModal}>
              <i className="fas fa-times-circle" />
            </ModalBtn>
          </ModalHeader>
          <ModalText>{todo?.taskName}</ModalText>
        </ModalWrapper>
      </Modal>
      <Row
        draggable
        onDragStart={onDragStart}
        onDragOver={onDragOver}
        onDrop={onDrop}
        id={String(idx)}
      >
        <ItemWrapper onClick={toggleModal} id={String(idx)}>
          <Item id={String(idx)}>{todo?.taskName}</Item>
        </ItemWrapper>
        <TodoSelector todos={todos} todo={todo} setTodos={setTodos} idx={idx} />
        <DeleteBtn id={String(todo?.id)} onClick={deleteItem}>
          <i className="fas fa-trash-alt" />
        </DeleteBtn>
      </Row>
    </>
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
  width: 50%;
  display: flex;
  align-items: center;
  cursor: pointer;
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

const ModalWrapper = styled.div`
  position: fixed;
  top: 30vh;
  width: 400px;
  background-color: beige;
  padding-bottom: 20px;
  border-radius: 20px;
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 8px 8px;
`;

const ModalBtn = styled.button`
  font-size: 33px;
`;

const ModalText = styled.div`
  font-size: 25px;
  padding: 8px 30px;
  word-wrap: break-word;
  height: 200px;
  overflow-y: auto;
`;
