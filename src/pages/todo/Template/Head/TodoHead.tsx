import React, { RefObject } from 'react';
import styled from 'styled-components';
import TodoFilter from 'pages/todo/Template/Filter/TodoFilter';
import { ITodo } from 'utils/localStorageHelper';

interface ITodoHead {
  todo: string;
  todos: ITodo[] | null;
  filter: ITodo[] | null;
  setFilter: (todos: ITodo[] | null) => void;
  addTodo: (e: React.FormEvent<HTMLFormElement>) => void;
  onChangeTodo: (e: React.ChangeEvent<HTMLInputElement>) => void;
  inputRef: RefObject<HTMLInputElement>;
}

const TodoHead: React.FC<ITodoHead> = ({
  todo,
  todos,
  filter,
  setFilter,
  addTodo,
  onChangeTodo,
  inputRef,
}) => {
  return (
    <Header>
      <Wrap direction={'column'}>
        <Wrap direction={'row'}>
          <HiddenTitle>todo list</HiddenTitle>
          <Form onSubmit={addTodo} id="todoForm">
            <Input
              autoFocus
              value={todo}
              ref={inputRef}
              onChange={onChangeTodo}
              type="text"
            />
          </Form>
          <Btn form="todoForm" type="submit">
            <i className="fas fa-plus" />
          </Btn>
        </Wrap>
        <TodoFilter todos={todos} filter={filter} setFilter={setFilter} />
      </Wrap>
    </Header>
  );
};

export default TodoHead;

const Wrap = styled.div<{ direction: string }>`
  display: flex;
  flex-direction: ${props => props.direction};
  width: 100%;
  height: 100%;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  height: 200px;
  padding: 70px 70px 10px 70px;
  background-color: #81c784;
  border-radius: 20px 20px 0 0;
`;

const HiddenTitle = styled.div`
  position: absolute !important;
  overflow: hidden;
  clip: rect(0 0 0 0);
  width: 1px;
  height: 1px;
  white-space: nowrap;
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
