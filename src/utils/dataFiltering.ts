import { ITodo } from './localStorageHelper';

const convertStatus = (status: string): string => {
  switch (status) {
    case '완료':
      return 'status.FINISHED';
    case '진행중':
      return 'status.ONGOING';
    case '시작안함':
      return 'status.NOT_STARTED';
  }
  return 'ALL';
};

export const OriginData = (data: ITodo[]): ITodo[] => {
  return data;
};

export const filterStatus = (status: string, data: ITodo[]): ITodo[] => {
  let cstatus = convertStatus(status);
  if (cstatus === 'ALL') {
    return data;
  } else {
    return data.filter((Itodo: ITodo) => Itodo.status === cstatus);
  }
};

export const filterDate = (date: null | Date, data: ITodo[]): ITodo[] => {
  let [selectMonth, selectDate] = ['', ''];
  if (date) {
    selectMonth =
      (date?.getMonth() + 1).toString().length < 2
        ? '0' + (date?.getMonth() + 1).toString()
        : (date?.getMonth() + 1).toString();
    selectDate =
      date?.getDate().toString().length < 2
        ? '0' + date?.getDate().toString()
        : date?.getDate().toString();
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
  const filter_all = filterDate(date, filter_status);
  return filter_all;
};
