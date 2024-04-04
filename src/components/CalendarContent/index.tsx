import React from 'react';

import { CalendarProps } from '@/types/interfaces';
import { isWeekend } from '@/utils/IsWeekend';
import { isHoliday } from '@/utils/isHoliday';
import { getFormattedDate } from '@/utils/getFormattedDate';
import { CellTypes } from '@/constants/cellTypes';

import { DateCell, DateCellText, DateCellWrapper } from './styled';

export const CalendarContent = ({
  dates,
  showWeekends,
  holidays,
  selectedDay,
  setSelectedDateValue,
}: Omit<CalendarProps, 'isShown' | 'startWeekWith'>) => (
  <DateCellWrapper>
    {dates.map(({ day, month, year, type }) => {
      const formattedDate = getFormattedDate(day, month, year);
      const isSelected = selectedDay === formattedDate && type === CellTypes.Current;
      const isWeekendCell = showWeekends && isWeekend(day, month, year);
      const isHolidayCell = isHoliday(formattedDate, holidays);
      const isInThisMonth = type === CellTypes.Current;

      return (
        <DateCell
          key={`${day}-${month}-${year}`}
          data-isholiday={isHolidayCell}
          data-isweekend={isWeekendCell}
          data-selected={isSelected}
          data-inthismonth={isInThisMonth}
          onClick={setSelectedDateValue?.(type, formattedDate)}
        >
          <DateCellText>{day}</DateCellText>
        </DateCell>
      );
    })}
  </DateCellWrapper>
);
