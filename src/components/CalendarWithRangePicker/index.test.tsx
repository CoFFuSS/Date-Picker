/* eslint-disable import/no-extraneous-dependencies */
import { render, fireEvent, waitFor, screen, act } from '@testing-library/react';

import '@testing-library/jest-dom';
import { Holiday } from '@/types/interfaces';
import { StartDays } from '@/constants/startDays';

import { CalendarWithRangePicker } from '.';

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

describe('CalendarWithRangePicker', () => {
  const startInputTestId = 'start-input';
  const endInputTestId = 'end-input';

  beforeEach(async () =>
    waitFor(() => {
      render(
        <CalendarWithRangePicker
          fromDate='07.04.2024'
          toDate='09.04.2024'
          startOfWeek={StartDays.Monday}
          showHolidays
          showWeekends
        />,
      );
    }),
  );

  afterEach(() => {
    const clearButton = screen.getByTestId('clear-input');
    fireEvent.click(clearButton);
    localStorage.clear();
  });

  it('renders without crashing', async () => {
    expect(screen.getByTestId(startInputTestId)).toBeInTheDocument();
    expect(screen.getByTestId(endInputTestId)).toBeInTheDocument();
  });

  it('updates input value when a date is selected', async () => {
    const startInput = screen.getByTestId(startInputTestId);

    fireEvent.input(startInput, { target: { value: '15042024' } });
    fireEvent.keyDown(startInput, { key: 'Enter', code: 'Enter' });
    expect(startInput).toHaveValue('15.04.2024');
    jest.useFakeTimers();

    const endInput = screen.getByTestId(endInputTestId);
    fireEvent.input(endInput, { target: { value: '18042024' } });
    fireEvent.keyDown(endInput, { key: 'Enter', code: 'Enter' });
    expect(endInput).toHaveValue('18.04.2024');
  });

  it('handles mouse events correctly', async () => {
    jest.useFakeTimers();
    const cellToClick = screen.getByText('10', { exact: true });
    const cellToDrag = screen.getByText('15', { exact: true });

    await act(async () => {
      fireEvent.mouseDown(cellToClick);
      fireEvent.mouseUp(cellToDrag);
    });

    await act(() => {});
    const fromInput: HTMLInputElement = screen.getByTestId(startInputTestId);
    const toInput: HTMLInputElement = screen.getByTestId(endInputTestId);
    expect(fromInput.value).toBe('10.04.2024');
    expect(toInput.value).toBe('15.04.2024');
  });

  it('displays error message for invalid input date', async () => {
    const calendarInput = screen.getByTestId(startInputTestId);

    fireEvent.input(calendarInput, { target: { value: '20122026' } });
    fireEvent.keyDown(calendarInput, { key: 'Enter', code: 'Enter' });
    jest.useFakeTimers();

    const endInput = screen.getByTestId(endInputTestId);
    fireEvent.input(endInput, { target: { value: '20122026' } });
    fireEvent.keyDown(endInput, { key: 'Enter', code: 'Enter' });

    await waitFor(() => {
      expect(screen.getByTestId('range-picker-error')).toBeInTheDocument();
    });
  });
});
