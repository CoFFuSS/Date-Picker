import { ThemeProvider } from 'styled-components';
import React, { ChangeEvent, useState } from 'react';

import { basicTheme } from '@/theme';
import { DateInput } from '@/components/DateInput';

import { DatePickerForm } from './styled';

import { Calendar } from '../Calendar';

export const App = () => {
  const [dateInput, setDateInput] = useState<string>('');
  const [isShown, setIsShown] = useState<boolean>(false);

  const handleDateInputChange = (e: ChangeEvent<HTMLInputElement>) => () => {
    setDateInput(e.target.value);
  };

  const handleOpenCalendar = () => {
    setIsShown(true);
  };

  const handleCloseCalendar = () => {
    setIsShown(false);
  };

  return (
    <ThemeProvider theme={basicTheme}>
      <DatePickerForm>
        <DateInput
          value={dateInput}
          onChange={handleDateInputChange}
          onCalendarClick={handleOpenCalendar}
          onCloseCalendarClick={handleCloseCalendar}
        />
        <Calendar isShown={isShown} />
      </DatePickerForm>
    </ThemeProvider>
  );
};
