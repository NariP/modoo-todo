const localStorageHelper: ILocalStorageHelper = {
  getItem: key => {
    const data: string | null = localStorage.getItem(key);
    return data && JSON.parse(data);
  },
  setItem: (key, data) => {
    localStorage.setItem(key, JSON.stringify(data));
  },
};

export interface ITodo {
  // NOTE: 나중에 데이터 타입 확실히 정해지면 수정하기
  // NOTE: 타입 위치할 파일도 고려해보기
  id: number;
  taskName: string;
  status: string;
  createdAt: string;
  updatedAt: string;
  [key: string]: string | any;
}
interface ILocalStorageHelper {
  getItem: (key: string) => ITodo[] | null;
  setItem: (key: string, data: ITodo[]) => void;
}
export default localStorageHelper;
