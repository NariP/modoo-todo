import React, { useEffect } from 'react';
import { SELECT } from 'utils/constants';
import styled from 'styled-components';

const RadioSelect = ({
  name,
  COLOR,
  selected,
  setSelectedLabel,
  selectedLabel,
}: {
  name: string;
  COLOR: string[];
  selected: string;
  setSelectedLabel: Function;
  selectedLabel: { status: string; important: string; [key: string]: string };
}) => {
  useEffect(() => {
    console.log('update');
  }, [selectedLabel]);

  return (
    <RadioLayout>
      <Title>{name === 'status' ? '상   태' : '중요도'}</Title>
      {SELECT[name.toUpperCase()].slice(1).map((item, id) => {
        return (
          <RadioArea key={item}>
            <Input
              type="radio"
              id={item}
              name={name}
              value={item}
              checked={
                selectedLabel ? item === selectedLabel[name] : item === selected
              }
              onChange={e => {
                //NOTE: 라벨을 눌렀는데 onChange 자체가 일어나지 않음
                console.log('dd', name, e.target.id);
                setSelectedLabel({
                  ...selectedLabel,
                  [name]: e.target.id,
                });
              }}
            />
            <Label
              htmlFor={item}
              bg={COLOR[id]}
              itemProp={item}
              selected={selected}
              selectedLabel={selectedLabel[name]}
            >
              {item}
            </Label>
          </RadioArea>
        );
      })}
    </RadioLayout>
  );
};
const RadioLayout = styled.div`
  padding: 5px;
  display: flex;
  text-align: center;
`;
const Title = styled.div`
  font-size: 0.8em;
  color: ${props => props.theme.color.secondaryText};
  margin-top: 0.2em;
  margin-right: 0.5em;
`;
const RadioArea = styled.div`
  margin-bottom: 0.5em;
`;
const Input = styled.input`
  position: absolute;
  overflow: hidden;
  clip: rect(0 0 0 0);
`;
const Label = styled.label<{
  bg: string;
  itemProp: string;
  selected: string;
  selectedLabel: string;
}>`
  background: ${props => props.bg};
  color: #333;
  margin-right: 0.4em;
  font-size: 0.9em;
  padding: 0.3em 0.5em;
  border-radius: 10px;
  cursor: pointer;
  border: ${({ itemProp, selected, selectedLabel }) =>
    (selectedLabel ? itemProp === selectedLabel : itemProp === selected)
      ? `1px solid #E92EFB`
      : 'none'};
  &:active {
    border: 1px solid #e92efb;
  }
`;

export default RadioSelect;
