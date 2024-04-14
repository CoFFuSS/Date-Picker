/* eslint-disable import/no-extraneous-dependencies */
import { render } from '@testing-library/react';

import { StartDays } from '@/constants/startDays';
import '@testing-library/jest-dom';

import { CalendarWithRangePicker } from '.';

test('CalendarWithPicker', () => {
  render(
    <CalendarWithRangePicker
      fromDate='05.04.2024'
      toDate='09.04.2024'
      startOfWeek={StartDays.Monday}
      showHolidays
      showWeekends
    />,
  );
});
