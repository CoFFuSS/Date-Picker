import { memo, useContext } from 'react';

import { CalendarHeader } from '@/components/CalendarHeader';
import { InputLogicContext } from '@/context/inputLogicContext';
import { CalendarContext } from '@/context/CalendarContext';
import { ServiceDecoratorContext } from '@/context/serviceDecoratorContext';
import { getMonthName } from '@/utils/getMonthName';

import { CalendarContainer } from './styled';

import { DateSwitcher } from '../DateSwitcher';
import { CalendarContent } from '../CalendarContent';
import { CalendarYearPicker } from '../CalendarYearPicker';

export const Calendar = memo(() => {
  const {
    handleSelectDateValue,
    startDate,
    endDate,
    handleMouseDown,
    handleMouseEnter,
    handleMouseUp,
    isSelectingYear,
  } = useContext(InputLogicContext);

  const { dates, showWeekends, startWeekWith, isShown, selectedValue, todo } =
    useContext(CalendarContext);

  const { holidays, year, month } = useContext(ServiceDecoratorContext);
  const monthName = getMonthName(year, month);

  return (
    <CalendarContainer isShown={isShown}>
      <DateSwitcher
        month={monthName}
        year={String(year)}
      />
      {isSelectingYear ? (
        <CalendarYearPicker />
      ) : (
        <>
          <CalendarHeader startWeekWith={startWeekWith} />
          <CalendarContent
            dates={dates}
            holidays={holidays}
            showWeekends={showWeekends}
            selectedDay={selectedValue}
            handleSelectDateValue={handleSelectDateValue}
            todo={todo}
            handleMouseUp={handleMouseUp}
            handleMouseDown={handleMouseDown}
            handleMouseEnter={handleMouseEnter}
            startDate={startDate}
            endDate={endDate}
          />
        </>
      )}
    </CalendarContainer>
  );
});
