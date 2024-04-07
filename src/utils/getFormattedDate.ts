export const getFormattedDate = (day: number, month: number, year: number) => {
  const paddedDay = day < 10 ? `0${day}` : day.toString();
  const paddedMonth = month < 10 ? `0${month}` : month.toString();

  return `${paddedDay}.${paddedMonth}.${year}`;
};
