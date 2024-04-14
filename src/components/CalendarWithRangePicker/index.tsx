import { useMemo, useState } from 'react';
import { ThemeProvider } from 'styled-components';

import { StartDays } from '@/constants/startDays';
import { splitDate } from '@/utils/splitDate';
import { getCalendarData } from '@/utils/getCalendarData';
import { Calendar } from '@/components/Calendar';
import { ErrorBoundary } from '@/components/ErrorBoundary';
import { serviceDecorator } from '@/hocs/serviceDecorator';
import { CalendarWithRangeProps, Todo } from '@/types/interfaces';
import { CalendarContext } from '@/context/CalendarContext';
import { rangePickerLogicDecorator } from '@/hocs/rangePickerLogicDecorator';
import { basicTheme } from '@/theme';

export const CalendarWithRangePicker = ({
  fromDate,
  toDate,
  startOfWeek = StartDays.Monday,
  showHolidays = true,
  showWeekends = true,
}: CalendarWithRangeProps) => {
  const [startDate, setStartDate] = useState<string>(fromDate);
  const [endDate, setEndDate] = useState<string>(toDate);
  const [inputDate, setInputDate] = useState(fromDate);
  const [isShown, setIsShown] = useState<boolean>(true);
  const { day, month, year } = splitDate(inputDate);

  const dates = useMemo(
    () => getCalendarData(year, month, startOfWeek),
    [year, month, startOfWeek],
  );

  const contextValue = useMemo(
    () => ({
      dates,
      showHolidays,
      showWeekends,
      startWeekWith: startOfWeek,
      inputDate,
      selectedValue: '',
      isShown,
      todo: [] as Todo[],
    }),
    [dates, inputDate, isShown, showHolidays, showWeekends, startOfWeek],
  );

  const CalendarWithLogic = serviceDecorator(Calendar, day, month, year);
  const CalendarWithRange = rangePickerLogicDecorator(
    CalendarWithLogic,
    startDate,
    endDate,
    inputDate,
    setStartDate,
    setEndDate,
    setInputDate,
    setIsShown,
  );

  return (
    <ThemeProvider theme={basicTheme}>
      <CalendarContext.Provider value={contextValue}>
        <ErrorBoundary>
          <CalendarWithRange />
        </ErrorBoundary>
      </CalendarContext.Provider>
    </ThemeProvider>
  );
};
