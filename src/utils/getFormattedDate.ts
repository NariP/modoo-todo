const getFormattedDate = (date: number): string => {
  return date.toString().length < 2 ? '0' + date.toString() : date.toString();
};

const getyyyyMMdd = (date: Date): string => {
  return (
    date.getFullYear() +
    '-' +
    getFormattedDate(date.getMonth() + 1) +
    '-' +
    getFormattedDate(date.getDate())
  );
};
export default getyyyyMMdd;
