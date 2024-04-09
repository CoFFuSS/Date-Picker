import { createContext } from 'react';

import { StartDays } from '@/constants/startDays';
import { CellDate, Todo } from '@/types/interfaces';

export const CalendarContext = createContext({
  dates: [] as CellDate[],
  showWeekends: true,
  showHolidays: true,
  startWeekWith: StartDays.Monday,
  inputDate: '',
  selectedValue: '',
  isShown: true,
  todo: [] as Todo[],
});
