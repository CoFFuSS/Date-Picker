export const getMonthName = (year: number, month: number) => {
  const date = new Date(year, month - 1);

  return date.toLocaleString('en-US', { month: 'long' });
};

export const getShortMonthName = (year: number, month: number) => {
  const date = new Date(year, month - 1);

  return date.toLocaleString('en-US', { month: 'short' });
};
