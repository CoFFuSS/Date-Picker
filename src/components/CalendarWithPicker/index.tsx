import { useMemo, useState } from 'react';
import { ThemeProvider } from 'styled-components';

import { StartDays } from '@/constants/startDays';
import { inputLogicDecorator } from '@/hocs/inputLogicDecorator';
import { currentDate } from '@/utils/getCurrentDate';
import { splitDate } from '@/utils/splitDate';
import { getCalendarData } from '@/utils/getCalendarData';
import { Calendar } from '@/components/Calendar';
import { ErrorBoundary } from '@/components/ErrorBoundary';
import { serviceDecorator } from '@/hocs/serviceDecorator';
import { CalendarWithPickerProps } from '@/types/interfaces';
import { CalendarContext } from '@/context/CalendarContext';
import { basicTheme } from '@/theme';

export const CalendarWithPicker = ({
  value,
  startOfWeek = StartDays.Monday,
  showHolidays = true,
  showWeekends = true,
  min = '',
  max = '',
}: CalendarWithPickerProps) => {
  const [inputDate, setInputDate] = useState(value || currentDate);
  const [selectedValue, setSelectedValue] = useState(value || inputDate);
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
      selectedValue,
      isShown,
      todo: [],
    }),
    [dates, inputDate, isShown, selectedValue, showHolidays, showWeekends, startOfWeek],
  );

  const CalendarWithLogic = serviceDecorator(Calendar, day, month, year);
  const CalendarWithInput = inputLogicDecorator(
    CalendarWithLogic,
    inputDate,
    setInputDate,
    setSelectedValue,
    setIsShown,
    max,
    min,
  );

  return (
    <div>
      <ThemeProvider theme={basicTheme}>
        <ErrorBoundary>
          <CalendarContext.Provider value={contextValue}>
            <CalendarWithInput />
          </CalendarContext.Provider>
        </ErrorBoundary>
      </ThemeProvider>
    </div>
  );
};
