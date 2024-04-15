import { CalendarContentProps } from '@/types/interfaces';
import { isWeekend } from '@/utils/IsWeekend';
import { isHoliday } from '@/utils/isHoliday';
import { getFormattedDate } from '@/utils/getFormattedDate';
import { CellTypes } from '@/constants/cellTypes';
import { isDayHaveTodos } from '@/utils/isDayHaveTodos';
import { isDateInRange } from '@/utils/isDateInRange';

import { DateCell, DateCellText, DateCellWrapper } from './styled';

export const CalendarContent = ({
  dates,
  showWeekends,
  holidays,
  selectedDay,
  setSelectedDateValue,
  todo,
  handleMouseUp,
  handleMouseDown,
  handleMouseEnter,
  startDate,
  endDate,
}: CalendarContentProps) => (
  <DateCellWrapper>
    {dates.map(({ day, month, year, type }) => {
      const formattedDate = getFormattedDate(day, month, year);
      const isSelected = selectedDay === formattedDate && type === CellTypes.Current;

      const isStartDate = startDate === formattedDate;
      const isEndDate = endDate === formattedDate;
      const isWeekendCell = showWeekends && isWeekend(day, month, year);
      const isHolidayCell = isHoliday(formattedDate, holidays);
      const isInThisMonth = type === CellTypes.Current;
      const isHaveTodos = isDayHaveTodos(day, month, year, todo);
      const isInRange = startDate && endDate && isDateInRange(formattedDate, startDate, endDate);

      return (
        <DateCell
          key={`${day}.${month}.${year}`}
          data-isholiday={isHolidayCell}
          data-isweekend={isWeekendCell}
          data-selected={isSelected}
          data-inthismonth={isInThisMonth}
          data-havetodos={isHaveTodos}
          data-isinrange={isInRange}
          data-startdate={isStartDate}
          data-enddate={isEndDate}
          onClick={setSelectedDateValue?.(type, formattedDate)}
          onMouseDown={handleMouseDown?.(formattedDate)}
          onMouseUp={handleMouseUp?.(formattedDate)}
          onMouseEnter={handleMouseEnter?.(formattedDate)}
        >
          <DateCellText>{day}</DateCellText>
        </DateCell>
      );
    })}
  </DateCellWrapper>
);
