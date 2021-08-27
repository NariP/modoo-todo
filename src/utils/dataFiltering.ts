import { ITodo } from './localStorageHelper';
import { ISelected } from 'pages/todo/Template/Filter/TodoFilter';

export const getFilteredData = (
  selected: [] | ISelected[],
  data: ITodo[],
): ITodo[] => {
  if (!selected) return data;

  selected.forEach(({ option, select }) => {
    data =
      option !== 'createdAt' && select === '전체'
        ? data
        : data.filter(item => item[option] === select);
  });
  return data;
};
