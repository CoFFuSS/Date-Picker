const getCurrentDate = (): string => {
  const date = new Date();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  const day = date.getDate();
  const formatedDay = day < 10 ? `0${day}` : day;
  const formatedMonth = month < 10 ? `0${month}` : month;

  return `${formatedDay}.${formatedMonth}.${year}`;
};

export const currentDate = getCurrentDate();
