export const getMonthName = (year: number, month: number) => {
  const date = new Date(year, month - 1);

  return date.toLocaleString('en-US', { month: 'long' });
};
