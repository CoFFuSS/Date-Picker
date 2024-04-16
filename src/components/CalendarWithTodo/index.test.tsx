/* eslint-disable import/no-extraneous-dependencies */
import { render, fireEvent, waitFor, screen } from '@testing-library/react';

import '@testing-library/jest-dom';
import { act } from 'react-dom/test-utils';

import { Holiday } from '@/types/interfaces';
import { StartDays } from '@/constants/startDays';

import { CalendarWithTodo } from '.';

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

describe('CalendarWithTodo', () => {
  beforeEach(async () =>
    waitFor(() => {
      render(
        <CalendarWithTodo
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

  it('adds todos on click', async () => {
    const todoInput = screen.getByTestId('todo-input');
    const addTodoButton = screen.getByTestId('add-todo-button');

    await act(() => {
      fireEvent.input(todoInput, { target: { value: 'Buy milk' } });
      fireEvent.keyDown(todoInput, { key: 'Enter', code: 'Enter' });
    });

    fireEvent.click(addTodoButton);

    await waitFor(() => expect(screen.getByText('Buy milk')).toBeInTheDocument());
  });

  it('remove todos on click', async () => {
    const todoInput = screen.getByTestId('todo-input');

    await act(() => {
      fireEvent.input(todoInput, { target: { value: 'Buy milk' } });
      fireEvent.keyDown(todoInput, { key: 'Enter', code: 'Enter' });
    });

    const addTodoButton = screen.getByTestId('add-todo-button');
    fireEvent.click(addTodoButton);

    const todo = await waitFor(() => screen.getByText('Buy milk'));

    const todoRemovButton = screen.getByTestId('remove-todo-button-1');

    await act(() => {
      fireEvent.click(todoRemovButton);
    });

    await waitFor(() => expect(todo).not.toBeInTheDocument());
  });
});
