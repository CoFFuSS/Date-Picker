import { createContext } from 'react';

import { StartDays } from '@/constants/startDays';
import { CellDate } from '@/types/interfaces';

export const CalendarContext = createContext({
  dates: [] as CellDate[],
  showWeekends: true,
  showHolidays: true,
  startWeekWith: StartDays.Monday,
  inputDate: '',
  isShown: true,
});