import { ITodo } from '../pages/todo/utils/useTodoService';

const localStorageHelper: ILocalStorageHelper = {
  getItem: key => {
    const data: string | null = localStorage.getItem(key);
    return data && JSON.parse(data);
  },
  setItem: (key, data) => {
    localStorage.setItem(key, JSON.stringify(data));
  },
};

interface ILocalStorageHelper {
  getItem: (key: string) => ITodo[] | null;
  setItem: (key: string, data: ITodo[]) => void;
}
export default localStorageHelper;
