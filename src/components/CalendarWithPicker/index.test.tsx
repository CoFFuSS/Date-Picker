/* eslint-disable import/no-extraneous-dependencies */
import { render, fireEvent, waitFor, screen } from '@testing-library/react';

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

describe('CalendarWithPicker', () => {
  beforeEach(async () =>
    waitFor(() => {
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
    }),
  );

  afterEach(() => {
    localStorage.clear();
  });

  it('renders without crashing', async () => {
    const calendarInput = screen.getByTestId('input');
    expect(calendarInput).toBeInTheDocument();
  });

  it('updates input value when a date is selected', async () => {
    const calendarInput = screen.getByTestId('input');

    fireEvent.change(calendarInput, { target: { value: '15042024' } });
    fireEvent.keyDown(calendarInput, { key: 'Enter', code: 'Enter' });

    expect(calendarInput).toHaveValue('15.04.2024');
  });

  it('displays error message for invalid input date', async () => {
    const calendarInput = screen.getByTestId('input');

    fireEvent.change(calendarInput, { target: { value: '20122026' } });
    fireEvent.keyDown(calendarInput, { key: 'Enter', code: 'Enter' });

    await waitFor(() => {
      expect(
        screen.getByText('Your date is either more than 10.02.2025 or less than 10.12.2022'),
      ).toBeInTheDocument();
    });
  });
});
