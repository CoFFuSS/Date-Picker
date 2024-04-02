import { ThemeProvider } from 'styled-components';
import { ChangeEvent, useState } from 'react';

import { basicTheme } from '@/theme';
import { DateInput } from '@/components/DateInput';

import { DatePickerForm } from './styled';

export const App = () => {
  const [dateInput, setDateInput] = useState<string>('');

  const handleDateInputChange = (e: ChangeEvent<HTMLInputElement>) => () => {
    setDateInput(e.target.value);
  };

  return (
    <ThemeProvider theme={basicTheme}>
      <DatePickerForm>
        <DateInput
          value={dateInput}
          onChange={handleDateInputChange}
        />
        <h1>Hello World!</h1>
      </DatePickerForm>
    </ThemeProvider>
  );
};
