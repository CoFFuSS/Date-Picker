import { CellTypes } from '@/constants/cellTypes';

import { getFormattedDate } from './getFormattedDate';
import { splitDate } from './splitDate';

export const updateDate = (value: string, type: CellTypes) => {
  const { day, month, year } = splitDate(value);

  let newMonth;
  let newYear;

  switch (type) {
    case CellTypes.Next:
      newMonth = month % 12 === 0 ? 12 : month % 12;
      newYear = newMonth === 1 ? year + 1 : year;
      break;
    case CellTypes.Prev:
      newMonth = month === 0 ? 12 : month;
      newYear = newMonth === 12 ? year - 1 : year;
      break;
    case CellTypes.Current:
      newMonth = month;
      newYear = year;
      break;

    default:
      return '';
  }

  return getFormattedDate(day, newMonth, newYear);
};
