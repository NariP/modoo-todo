import React, { useState, MouseEvent } from 'react';
import { Icon } from 'components/Icon';
import { ITodo } from 'pages/todo/utils/useTodoService';
import styled from 'styled-components';
import RadioSelect from './RadioSelect';

interface ITodoEditProps {
  todo: ITodo;
  setTodos: Function;
  clickedIdx: number;
  todos: ITodo[] | [];
  toggleModal: Function;
}
const TodoEdit: React.FC<ITodoEditProps> = ({
  todo,
  todos,
  setTodos,
  clickedIdx,
  toggleModal,
}) => {
  const [task, setTask] = useState('');
  const [selectedLabel, setSelectedLabel] = useState({
    status: '',
    important: '',
  });
  const selected = [todo.status, todo.important];
  const clickHandler = (e: MouseEvent<HTMLButtonElement>) => {
    const modifiedTodo = {
      ...todo,
      taskName: !task ? todo.taskName : task,
      status: !selectedLabel.status ? todo.status : selectedLabel.status,
      important: !selectedLabel.important
        ? todo.important
        : selectedLabel.important,
    };
    console.log(clickedIdx, modifiedTodo);
    if (clickedIdx === 0) {
      setTodos([modifiedTodo].concat(todos.slice(1)));
    } else if (clickedIdx === todos.length - 1) {
      // 마지막 인덱스일 때
      setTodos([...todos.slice(0, todos.length - 1), modifiedTodo]);
    } else {
      setTodos([
        ...todos.slice(0, clickedIdx),
        modifiedTodo,
        ...todos.slice(clickedIdx + 1),
      ]);
    }
    setTask('');
    toggleModal();
  };
  return (
    <Form>
      <TextInput>
        <Label htmlFor="taskName">todo</Label>
        <Input
          type="text"
          id="taskName"
          name="taskName"
          value={task}
          placeholder={todo.taskName}
          onChange={e => setTask(e.target.value)}
        />
      </TextInput>
      {RADIO_TYPES.map((type, idx) => {
        return (
          <RadioSelect
            key={type}
            name={type}
            COLOR={COLOR[idx]}
            selected={selected[idx]}
            setSelectedLabel={setSelectedLabel}
            selectedLabel={selectedLabel}
          />
        );
      })}
      <Button type="button" onClick={clickHandler}>
        <Icon>수정하기 ✏️</Icon>
      </Button>
    </Form>
  );
};
const Form = styled.form`
  padding-top: 10px;
  display: flex;
  flex-direction: column;
`;
const TextInput = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 0.7em;
`;
const Label = styled.label`
  font-size: 0.8em;
  color: ${props => props.theme.color.secondaryText};
  margin-bottom: 0.2em;
`;
const Input = styled.input`
  border: 2px solid ${props => props.theme.color.secondaryText};
  padding: 0.3em;
`;
const Button = styled.button`
  padding: 0.3em 0;
  margin-top: 0.7em;
  border: 2px solid ${props => props.theme.color.normalAlpha};
  border-radius: 5px;
  margin-right: 0;
  i {
    color: ${props => props.theme.color.textColor};
  }
  &:hover {
    background: ${props => props.theme.color.secondary};
    transition: opacity 150ms ease;
  }
`;
const RADIO_TYPES = ['status', 'important'];
const COLOR = [
  ['orange', '#FADCD9', '#D4F1F4'],
  ['#F8EA8C', '#EEEDE7', '#B4F8C8'],
];
export default TodoEdit;
