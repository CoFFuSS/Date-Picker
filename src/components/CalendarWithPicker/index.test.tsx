/* eslint-disable import/no-extraneous-dependencies */
import { render, screen } from '@testing-library/react';

import { StartDays } from '@/constants/startDays';
import '@testing-library/jest-dom';

import { CalendarWithPicker } from '.';

test('CalendarWithPicker', () => {
  render(
    <CalendarWithPicker
      value='07.04.2024'
      startOfWeek={StartDays.Monday}
      showHolidays
      showWeekends
      min='10.12.2022'
      max='10.02.2025'
    />,
  );

  screen.debug(undefined, 2000);
});
