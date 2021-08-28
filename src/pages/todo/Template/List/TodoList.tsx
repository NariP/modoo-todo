import React, { useState } from 'react';
import styled from 'styled-components';
import TodoItem from 'pages/todo/Template/List/Item/TodoItem';
import { ITodo } from 'pages/todo/utils/useTodoService';
import { Draggable } from 'components/Draggable';
import { CloseButton, Modal } from 'components/Modal';
import { TodoEdit } from './Item/TodoEdit';
import { useModal } from 'components/Modal/hooks';
import { IMPORTANT, STATUS } from 'utils/constants/Status';

interface ITodoList {
  todos: ITodo[] | [];
  filter: ITodo[] | null;
  setTodos: (todos: ITodo[] | []) => void;
}

const TodoList: React.FC<ITodoList> = ({ todos, filter, setTodos }) => {
  const [todoContext, setTodoContext] = useState({
    id: -1,
    taskName: '',
    status: STATUS.NOT_STARTED,
    createdAt: '',
    updatedAt: '미정',
    important: IMPORTANT.MIDDLE,
  });
  const [clickedIdx, setClickedIdx] = useState(-1);
  const [task, setTask] = useState('');
  const [selectedLabel, setSelectedLabel] = useState({
    status: '',
    important: '',
  });
  const { open, toggleModal } = useModal();

  const dataMap = (
    todo: ITodo[] | null,
    filter: ITodo[] | null,
  ): ITodo[] | null => {
    if (!filter) return todo;
    return filter;
  };
  const resetTodo = () => {
    setTask('');
    setSelectedLabel({
      status: '',
      important: '',
    });
  };

  return (
    <Body>
      <Modal open={open} toggleModal={toggleModal} func={resetTodo}>
        <Draggable
          title="수정하기"
          location={{ x: 'calc(100vw-40%)', y: 'calc(100vh-40%)' }}
          closeButton={
            <CloseButton toggleModal={toggleModal} func={resetTodo} />
          }
        >
          <TodoEdit
            task={task}
            setTask={setTask}
            selectedLabel={selectedLabel}
            setSelectedLabel={setSelectedLabel}
            todo={todoContext}
            todos={todos}
            setTodos={setTodos}
            clickedIdx={clickedIdx}
            toggleModal={toggleModal}
          />
        </Draggable>
      </Modal>
      <RowHead>
        <Task>목록</Task>
        <StatusSort>상태</StatusSort>
        <Sort>중요도</Sort>
      </RowHead>
      {dataMap(todos, filter)?.map((todo, i) => (
        <TodoItem
          key={i}
          todos={todos}
          todo={todo}
          setTodos={setTodos}
          idx={i}
          toggleModal={toggleModal}
          setTodoContext={setTodoContext}
          setClickedIdx={setClickedIdx}
        />
      ))}
    </Body>
  );
};

export default TodoList;

const RowHead = styled.div`
  width: 100%;
  display: flex;
  font-size: 0.8em;
  color: ${props => props.theme.color.secondaryText};
  margin-bottom: 10px;
  text-align: center;
  padding: 0 20px;
`;

const Task = styled.div`
  width: 60%;
`;

const Sort = styled.div`
  width: 10%;
`;
const StatusSort = styled.div`
  width: 10%;
  margin-right: 9px;
`;

const Body = styled.section`
  min-height: 50vh;
  padding: 10px;
  display: flex;
  flex-direction: column;
  border-radius: 0px 0px 20px 20px;
  overflow-y: auto;
`;
