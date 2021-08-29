import React, { EventHandler, FormEvent } from 'react';
import { Icon } from 'components/Icon';
import { ITodo } from 'pages/todo/utils/useTodoService';
import styled from 'styled-components';
import RadioSelect from './RadioSelect';

interface ITodoEditProps {
  task: string;
  selectedLabel: {
    status: string;
    important: string;
  };
  setTask: Function;
  setSelectedLabel: Function;
  todo: ITodo;
  setTodos: Function;
  clickedIdx: number;
  todos: ITodo[] | [];
  toggleModal: Function;
}
const TodoEdit: React.FC<ITodoEditProps> = ({
  task,
  setTask,
  selectedLabel,
  setSelectedLabel,
  todo,
  todos,
  setTodos,
  clickedIdx,
  toggleModal,
}) => {
  const selected = [todo.status, todo.important];
  const updateTodos = (updateData: ITodo) => {
    const newTodos: ITodo[] = [...todos];
    newTodos[clickedIdx] = updateData;
    setTodos(newTodos);
  };
  const clickHandler = (e: FormEvent) => {
    e.preventDefault();
    const modifiedTodo = {
      ...todo,
      taskName: !task ? todo.taskName : task,
      status: !selectedLabel.status ? todo.status : selectedLabel.status,
      important: !selectedLabel.important
        ? todo.important
        : selectedLabel.important,
    };
    updateTodos(modifiedTodo);
    setTask('');
    setSelectedLabel({
      status: '',
      important: '',
    });
    toggleModal();
  };

  return (
    <Form onSubmit={clickHandler}>
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
      <Button type="submit">
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
