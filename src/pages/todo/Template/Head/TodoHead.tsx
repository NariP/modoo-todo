import React, { RefObject } from 'react';
import styled from 'styled-components';
import TodoFilter from 'pages/todo/Template/Filter/TodoFilter';
import { ITodo } from 'pages/todo/utils/useTodoService';
import { Icon } from 'components/Icon';
import { getFormattedDate } from 'utils';

interface ITodoHead {
  todo: string;
  todos: ITodo[] | [];
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
  const today = getFormattedDate(new Date());
  return (
    <Header>
      <Wrap direction="column">
        <Today>{today}</Today>
        <Wrap direction="row">
          <HiddenTitle>todo list</HiddenTitle>
          <Form onSubmit={addTodo} id="todoForm">
            <Input
              autoFocus
              value={todo}
              ref={inputRef}
              onChange={onChangeTodo}
              type="text"
            />
            <Btn form="todoForm" type="submit">
              <Icon classes="fas fa-plus" />
            </Btn>
          </Form>
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
  border-bottom: ${props =>
    props.direction === 'column'
      ? `2px solid ${props.theme.color.primary}`
      : 'none'};
  justify-content: center;
  width: 100%;
  height: 100%;
`;
const Today = styled.div`
  color: ${props => props.theme.color.secondaryText};
  font-size: 0.8em;
  padding-bottom: 10px;
`;
const Header = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  background-color: inherit;
`;

const HiddenTitle = styled.div`
  position: absolute;
  overflow: hidden;
  clip: rect(0 0 0 0);
  width: 1px;
  height: 1px;
  white-space: nowrap;
`;

const Form = styled.form`
  border: 2px solid ${props => props.theme.color.normalAlpha};
  border-radius: 10px;
  overflow: hidden;
  display: flex;
  width: 80%;
  height: 100%;
  padding: 5px 5px 5px 0;
`;

const Input = styled.input`
  min-width: calc(100% - 50px);
  height: 100%;
  font-size: 20px;
  padding-left: 20px;
  background: ${props => props.theme.color.bgColor};
  color: ${props => props.theme.color.textColor};
`;

const Btn = styled.button`
  width: 40px;
  height: 40px;
  font-size: 20px;
  border-radius: 50%;
  background: ${props => props.theme.color.secondary};
  color: ${props => props.theme.color.textColor};
  margin-left: 10px;
  transition: transform 200ms ease-in;
  :hover {
    transform: scale(1.1);
  }
`;
