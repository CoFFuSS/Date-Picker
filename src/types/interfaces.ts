import { Dispatch, MouseEventHandler, SetStateAction } from 'react';

import { CellTypes } from '@/constants/cellTypes';
import { StartDays } from '@/constants/startDays';

export interface CellDate {
  year: number;
  month: number;
  day: number;
  type: CellTypes;
}

export interface CalendarHeaderProps {
  startWeekWith: StartDays;
}

export interface DateInputProps {
  onSubmitDate: (inputValue: string) => void;
  onCalendarIconClick: Dispatch<SetStateAction<boolean>>;
  onCalendarClearIconClick?: () => void;
  inputDate: string;
  testId: string;
}

export interface DateSwitcherProps {
  month: string;
  year: string;
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
  handleMouseUp: (data: string) => MouseEventHandler<HTMLDivElement> | undefined;
  handleMouseDown: (data: string) => MouseEventHandler<HTMLDivElement> | undefined;
  handleMouseEnter: (data: string) => MouseEventHandler<HTMLDivElement> | undefined;
  startDate: string;
  endDate: string;
}

export interface CalendarWithPickerProps {
  value: string;
  startOfWeek: StartDays;
  showHolidays: boolean;
  showWeekends: boolean;
  min?: string;
  max?: string;
}

export interface CalendarWithRangeProps {
  fromDate: string;
  toDate: string;
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
