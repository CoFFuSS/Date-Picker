import { Dispatch, MouseEventHandler, SetStateAction } from 'react';

import { CellTypes } from '@/constants/cellTypes';
import { StartDays } from '@/constants/startDays';

export interface CellDate {
  year: number;
  month: number;
  day: number;
  type: CellTypes;
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

export interface CalendarHeaderProps {
  startWeekWith: StartDays;
}

export interface DateInputProps {
  onSubmitDate: (inputValue: string) => void;
  onCalendarIconClick: Dispatch<SetStateAction<boolean>>;
}

export interface DateSwitcherProps {
  month: string;
}

export interface CalendarContentProps {
  dates: CellDate[];
  holidays: string[];
  showWeekends: boolean;
  selectedDay: string;
  setSelectedDateValue: (
    type: CellTypes,
    formattedDate: string,
  ) => MouseEventHandler<HTMLDivElement | undefined>;
  todo: Todo[];
}

export interface CalendarProps extends CalendarContentProps {
  isShown: boolean;
  startWeekWith: StartDays;
}

export interface ServiceDecoratorProps extends CalendarProps {
  showHolidays: boolean;
  year?: number;
  month?: number;
  day?: number;
}

export interface InputLogicDecoratorProps extends ServiceDecoratorProps {
  min?: string;
  max?: string;
}

export interface CalendarWithPickerProps {
  value: string;
  startOfWeek: StartDays;
  showHolidays: boolean;
  showWeekends: boolean;
  min?: string;
  max?: string;
}

export interface Holiday {
  date: string;
  localName: string;
  name: string;
  countryCode: string;
  fixed: boolean;
  global: boolean;
  counties: string[] | null;
  launchYear: number | null;
  types: string[];
}

export interface Todo {
  id: number;
  title: string;
  createdAt: string;
}
