import React, { RefObject } from 'react';
import styled from 'styled-components';

interface ITodoHead {
  addTodo: (
    e: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLElement>,
  ) => void;
  onChangeTodo: (e: React.ChangeEvent<HTMLInputElement>) => void;
  inputRef: RefObject<HTMLInputElement>;
}

const TodoHead: React.FC<ITodoHead> = ({ addTodo, onChangeTodo, inputRef }) => {
  return (
    <Header>
      <h2 style={{ display: 'none' }}>todo list</h2>
      <Form onSubmit={addTodo}>
        <Input ref={inputRef} onChange={onChangeTodo} type="text" />
      </Form>
      <Btn onClick={addTodo}>
        <i className="fas fa-plus" />
      </Btn>
    </Header>
  );
};

export default TodoHead;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  height: 200px;
  padding: 70px;
  background-color: #81c784;
  border-radius: 20px 20px 0 0;
`;

const Form = styled.form`
  width: 100%;
  height: 100%;
  margin-right: 40px;
`;

const Input = styled.input`
  width: 100%;
  height: 100%;
  font-size: 33px;
  padding-left: 20px;
`;

const Btn = styled.button`
  width: 80px;
  font-size: 33px;
  border-radius: 50%;
  background-color: #b1f9b3;
  transition: transform 200ms ease-in;
  :hover {
    transform: scale(1.1);
  }
`;
