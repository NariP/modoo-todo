import { ISelected } from '../TodoFilter';

const getUnique = (
  optionName: string,
  selected: [] | ISelected[],
): [] | ISelected[] => {
  return !selected
    ? selected
    : selected.filter(item => item.option !== optionName);
};
export default getUnique;
