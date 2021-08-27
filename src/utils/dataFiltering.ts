import { ITodo } from './localStorageHelper';
import { getFormattedDate } from 'utils';

export const filterStatus = (status: string, data: ITodo[]): ITodo[] => {
  if (status === '전체') {
    return data;
  } else {
    return data.filter((Itodo: ITodo) => Itodo.status === status);
  }
};

export const filterDate = (date: null | Date, data: ITodo[]): ITodo[] => {
  if (!date) return [];
  let selectedDate = getFormattedDate(date);
  return data.filter((Itodo: ITodo) => Itodo.createdAt === selectedDate);
};

export const filterImport = (important: string, data: ITodo[]): ITodo[] => {
  if (important === '전체') {
    return data;
  } else {
    return data.filter((Itodo: ITodo) => Itodo.important === important);
  }
};

export const filterSatusImport = (
  status: string,
  important: string,
  data: ITodo[],
): ITodo[] => {
  const filter_status = filterStatus(status, data);
  return filterImport(important, filter_status);
};

export const filterImportDate = (
  important: string,
  date: Date,
  data: ITodo[],
): ITodo[] => {
  const filter_importnt = filterImport(important, data);
  return filterDate(date, filter_importnt);
};

export const filterStatusDate = (
  status: string,
  date: Date,
  data: ITodo[],
): ITodo[] => {
  console.log(status, date);
  const filter_status = filterStatus(status, data);
  return filterDate(date, filter_status);
};

export const filterAll = (
  status: string,
  important: string,
  date: Date | null,
  data: ITodo[],
): ITodo[] => {
  const filter_status = filterStatus(status, data);
  const filter_importnt = filterImport(important, filter_status);
  return filterDate(date, filter_importnt);
};
