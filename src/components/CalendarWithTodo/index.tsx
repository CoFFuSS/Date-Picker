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
import { CalendarWithPickerProps } from '@/types/types';
import { CalendarContext } from '@/context/CalendarContext';
import { todoLogicDecorator } from '@/hocs/todoLogicDecorator';
import { useLocalStorageTodo } from '@/hooks/useLocalStorageTodo';
import { basicTheme } from '@/theme';

export const CalendarWithTodo = ({
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
  const [todo, addTodo, removeTodo] = useLocalStorageTodo();

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
      todo,
    }),
    [dates, inputDate, isShown, selectedValue, showHolidays, showWeekends, startOfWeek, todo],
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

  const CalendarWithTodoPicker = todoLogicDecorator(CalendarWithInput, todo, addTodo, removeTodo);

  return (
    <ThemeProvider theme={basicTheme}>
      <CalendarContext.Provider value={contextValue}>
        <ErrorBoundary>
          <CalendarWithTodoPicker />
        </ErrorBoundary>
      </CalendarContext.Provider>
    </ThemeProvider>
  );
};
