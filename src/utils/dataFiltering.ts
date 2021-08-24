import { ITodo } from './localStorageHelper';
import { STATUS } from './constants/Status';
import { getFormattedDate } from 'utils';

interface IStatus {
  [key: string]: string;
}
const convertStatus: IStatus = {
  [STATUS.FINISHED]: 'status.FINISHED',
  [STATUS.ONGOING]: 'status.ONGOING',
  [STATUS.NOT_STARTED]: 'status.NOT_STARTED',
  [STATUS.ALL]: 'ALL',
};

export const OriginData = (data: ITodo[]): ITodo[] => {
  return data;
};

export const filterStatus = (status: string, data: ITodo[]): ITodo[] => {
  let cstatus = convertStatus[status];
  if (cstatus === 'ALL') {
    return data;
  } else {
    return data.filter((Itodo: ITodo) => Itodo.status === cstatus);
  }
};

export const filterDate = (date: null | Date, data: ITodo[]): ITodo[] => {
  let [selectMonth, selectDate] = ['', ''];
  if (date) {
    selectMonth = getFormattedDate((date?.getMonth() + 1).toString());
    selectDate = getFormattedDate(date?.getDate().toString().toString());
  }
  let selectCalender =
    date?.getFullYear() + '-' + selectMonth + '-' + selectDate;
  return data.filter((Itodo: ITodo) => Itodo.createdAt === selectCalender);
};

export const filterAll = (
  status: string,
  date: Date | null,
  data: ITodo[],
): ITodo[] => {
  const filter_status = filterStatus(status, data);
  return filterDate(date, filter_status);
};
