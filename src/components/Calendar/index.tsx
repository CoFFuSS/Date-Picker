import { useContext } from 'react';

import { CalendarHeader } from '@/components/CalendarHeader';
import { CalendarContent } from '@/components/CalendarContent';
import { InputLogicContext } from '@/context/inputLogicContext';
import { CalendarContext } from '@/context/CalendarContext';
import { ServiceDecoratorContext } from '@/context/serviceDecoratorContext';
import { getMonthName } from '@/utils/getMonthName';

import { CalendarContainer } from './styled';

import { DateSwitcher } from '../DateSwitcher';

export const Calendar = () => {
  const { setSelectedDateValue } = useContext(InputLogicContext);
  const { dates, showWeekends, startWeekWith, inputDate, isShown } = useContext(CalendarContext);
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
        selectedDay={inputDate}
        setSelectedDateValue={setSelectedDateValue}
      />
    </CalendarContainer>
  );
};
