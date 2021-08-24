const getFormattedDate = () => {
  const options: object = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  return new Date().toLocaleDateString('en-US', options);
};
export default getFormattedDate;
