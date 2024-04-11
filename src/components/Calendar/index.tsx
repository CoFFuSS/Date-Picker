import { useContext } from 'react';

import { CalendarHeader } from '@/components/CalendarHeader';
import { InputLogicContext } from '@/context/inputLogicContext';
import { CalendarContext } from '@/context/CalendarContext';
import { ServiceDecoratorContext } from '@/context/serviceDecoratorContext';
import { getMonthName } from '@/utils/getMonthName';

import { CalendarContainer } from './styled';

import { DateSwitcher } from '../DateSwitcher';
import { CalendarContent } from '../CalendarContent';

export const Calendar = () => {
  const {
    setSelectedDateValue,
    startDate,
    endDate,
    handleMouseDown,
    handleMouseEnter,
    handleMouseUp,
  } = useContext(InputLogicContext);

  const { dates, showWeekends, startWeekWith, isShown, selectedValue, todo } =
    useContext(CalendarContext);

  const { holidays, year, month } = useContext(ServiceDecoratorContext);
  const monthName = getMonthName(year, month);

  return (
    <CalendarContainer isShown={isShown}>
      <DateSwitcher month={monthName} />
      <CalendarHeader startWeekWith={startWeekWith} />
      <CalendarContent
        dates={dates}
        holidays={holidays}
        showWeekends={showWeekends}
        selectedDay={selectedValue}
        setSelectedDateValue={setSelectedDateValue}
        todo={todo}
        handleMouseUp={handleMouseUp}
        handleMouseDown={handleMouseDown}
        handleMouseEnter={handleMouseEnter}
        startDate={startDate}
        endDate={endDate}
      />
    </CalendarContainer>
  );
};
