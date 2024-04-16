export const isWeekend = (day: number, month: number, year: number) => {
  const dayIndex = new Date(year, month - 1, day).getDay();

  return dayIndex === 0 || dayIndex === 6;
};
