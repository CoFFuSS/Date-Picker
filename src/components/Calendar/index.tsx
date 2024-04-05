import { CalendarHeader } from '@/components/CalendarHeader';
import { CalendarContent } from '@/components/CalendarContent';
import { CalendarProps } from '@/types/interfaces';

import { CalendarContainer } from './styled';

export const Calendar = ({
  isShown,
  dates,
  holidays,
  showWeekends,
  startWeekWith,
  selectedDay,
  setSelectedDateValue,
}: CalendarProps) => (
  <CalendarContainer isShown={isShown}>
    <CalendarHeader startWeekWith={startWeekWith} />
    <CalendarContent
      dates={dates}
      holidays={holidays}
      showWeekends={showWeekends}
      selectedDay={selectedDay}
      setSelectedDateValue={setSelectedDateValue}
    />
  </CalendarContainer>
);
