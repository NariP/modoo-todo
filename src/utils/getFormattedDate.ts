export const getFormattedDate = (date: string): string => {
  return date.length < 2 ? '0' + date : date;
};
