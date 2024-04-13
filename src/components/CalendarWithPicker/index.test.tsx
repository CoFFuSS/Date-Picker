/* eslint-disable import/no-extraneous-dependencies */
import { render, screen } from '@testing-library/react';

import { StartDays } from '@/constants/startDays';
import '@testing-library/jest-dom';

import { CalendarWithPicker } from '.';

// describe('CalendarWithPicker', () => {
//   beforeEach(() => {
//     render(
// <CalendarWithPicker
//   value='07.04.2024'
//   startOfWeek={StartDays.Monday}
//   showHolidays
//   showWeekends
//   min='10.12.2022'
//   max='10.02.2025'
// />
//     );
//   });

//   afterEach(() => {
//     localStorage.clear();
//   });

//   it('should render the calendar', () => {
// const input = screen.getByTestId('input');
// expect(input).toHaveValue('07.04.2024');
//   });
// });

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

  expect(screen.getByText('April')).toBeInTheDocument();
});
