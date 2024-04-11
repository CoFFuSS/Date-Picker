import { StartDays } from '@/constants/startDays';

import { CalendarWithTodo } from '.';

export default {
  title: 'CalendarWithTodo',
  component: CalendarWithTodo,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export const DefaultTodoPicker = {
  args: {
    value: '07.04.2024',
    startOfWeek: StartDays.Monday,
    showHolidays: true,
    showWeekends: true,
    min: '10.12.2022',
    max: '10.02.2025',
  },
};
