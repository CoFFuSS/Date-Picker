/* eslint-disable import/no-extraneous-dependencies */
import { render, fireEvent, waitFor } from '@testing-library/react';

import '@testing-library/jest-dom';
import { Holiday } from '@/types/interfaces';
import { StartDays } from '@/constants/startDays';

import { CalendarWithPicker } from '.';

global.fetch = jest.fn().mockImplementation(() =>
  Promise.resolve({
    json: () => Promise.resolve([] as Holiday[]),
    headers: {
      'Content-Type': 'application/json',
    },
    ok: true,
    status: 200,
    statusText: 'OK',
  }),
);

describe('CalendarWithPicker component', () => {
  it('renders without crashing', async () => {
    const { getByTestId } = render(
      <CalendarWithPicker
        value='07.04.2024'
        startOfWeek={StartDays.Monday}
        showHolidays
        showWeekends
        min='10.12.2022'
        max='10.02.2025'
      />,
    );

    const calendarInput = getByTestId('input');
    expect(calendarInput).toBeInTheDocument();
  });

  it('updates input value when a date is selected', async () => {
    const { getByTestId } = render(
      <CalendarWithPicker
        value='07.04.2024'
        startOfWeek={StartDays.Monday}
        showHolidays
        showWeekends
        min='10.12.2022'
        max='10.02.2025'
      />,
    );

    const calendarInput = getByTestId('input');

    fireEvent.change(calendarInput, { target: { value: '15042024' } });
    fireEvent.keyDown(calendarInput, { key: 'Enter', code: 'Enter' });

    expect(calendarInput).toHaveValue('15.04.2024');
  });

  it('displays error message for invalid input date', async () => {
    const { getByTestId, getByText } = render(
      <CalendarWithPicker
        value='07.04.2024'
        startOfWeek={StartDays.Monday}
        showHolidays
        showWeekends
        min='10.12.2022'
        max='10.02.2025'
      />,
    );

    const calendarInput = getByTestId('input');

    fireEvent.change(calendarInput, { target: { value: '20122026' } });
    fireEvent.keyDown(calendarInput, { key: 'Enter', code: 'Enter' });

    await waitFor(() => {
      expect(
        getByText('Your date is either more than 10.02.2025 or less than 10.12.2022'),
      ).toBeInTheDocument();
    });
  });
});
