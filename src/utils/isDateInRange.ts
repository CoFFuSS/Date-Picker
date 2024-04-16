import { splitDate } from './splitDate';

export const isDateInRange = (inputDate: string, min?: string, max?: string) => {
  if (!min || !max) return true;

  const { day, month, year } = splitDate(inputDate);
  const { day: minDay, month: minMonth, year: minYear } = splitDate(min);
  const { day: maxDay, month: maxMonth, year: maxYear } = splitDate(max);

  const inputDateTime = new Date(year, month - 1, day).getTime();
  const minDateTime = new Date(minYear, minMonth - 1, minDay).getTime();
  const maxDateTime = new Date(maxYear, maxMonth - 1, maxDay).getTime();

  return inputDateTime >= minDateTime && inputDateTime <= maxDateTime;
};
