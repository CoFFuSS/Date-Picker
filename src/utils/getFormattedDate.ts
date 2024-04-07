import { splitDate } from './splitDate';

export const getFormattedDate = (day: number, month: number, year: number) => {
  const paddedDay = day < 10 ? `0${day}` : day.toString();
  const paddedMonth = month < 10 ? `0${month}` : month.toString();

  return `${paddedDay}.${paddedMonth}.${year}`;
};

export const splitAndFormat = (value: string) => {
  const { day, month, year } = splitDate(value);

  return getFormattedDate(day, month, year);
};

export const splitDashDate = (dateString: string): { day: number; month: number; year: number } => {
  const parts = dateString.split('-');

  if (parts.length === 3) {
    const [yearStr, monthStr, dayStr] = parts;
    const year = parseInt(yearStr, 10);
    const month = parseInt(monthStr, 10);
    const day = parseInt(dayStr, 10);

    return { day, month, year };
  }

  throw new Error('Invalid date format');
};
