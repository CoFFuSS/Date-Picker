import { MouseEventHandler } from 'react';

import { CellTypes } from '@/constants/cellTypes';
import { StartDays } from '@/constants/startDays';

export interface CellDate {
  year: number;
  month: number;
  day: number;
  type: CellTypes;
}

export interface CalendarProps {
  year?: number;
  month?: number;
  day?: number;
  isShown: boolean;
  dates: CellDate[];
  holidays: string[];
  showWeekends: boolean;
  showHolidays?: boolean;
  startWeekWith: StartDays;
  selectedDay: string;
  setSelectedDateValue: (
    type: CellTypes,
    formattedDate: string,
  ) => MouseEventHandler<HTMLDivElement | undefined>;
}

export interface HolidaysApiResponse {
  date: string;
  localName: string;
  name: string;
  countryCode: string;
  fixed: boolean;
  global: boolean;
  countries: string[];
  lounchYear: number;
  types: string[];
}
