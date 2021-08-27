import React from 'react';
import styled from 'styled-components';
import TodoItem from 'pages/todo/Template/List/Item/TodoItem';
import { ITodo } from 'utils/localStorageHelper';

interface ITodoList {
  todos: ITodo[] | null;
  filter: ITodo[] | null;
  setTodos: (todos: ITodo[] | null) => void;
}

const TodoList: React.FC<ITodoList> = ({ todos, filter, setTodos }) => {
  const dataMap = (
    todo: ITodo[] | null,
    filter: ITodo[] | null,
  ): ITodo[] | null => {
    if (!filter) return todo;
    else return filter;
  };

  return (
    <Body>
      <RowHead>
        <Task>목록</Task>
        <InnerWrapper>
          <Sort>중요도</Sort>
          <Sort>상태</Sort>
        </InnerWrapper>
      </RowHead>
      {dataMap(todos, filter)?.map((todo, i) => (
        <TodoItem
          key={i}
          todos={todos}
          todo={todo}
          setTodos={setTodos}
          idx={i}
        />
      ))}
    </Body>
  );
};

export default TodoList;

const RowHead = styled.div`
  width: 100%;
  display: flex;
  padding-left: 27%;
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const InnerWrapper = styled.div`
  display: flex;
  padding-left: 21%;
  width: 300px;
`;

const Task = styled.div`
  width: 20%;
`;

const Sort = styled.div`
  margin-right: 8%;
`;

const Body = styled.section`
  height: 60vh;
  border: 5px solid #80c683;
  padding: 30px;
  display: flex;
  flex-direction: column;
  border-radius: 0px 0px 20px 20px;
  overflow-y: auto;
`;
