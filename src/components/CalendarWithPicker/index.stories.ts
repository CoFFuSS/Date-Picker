import { StartDays } from '@/constants/startDays';

import { CalendarWithPicker } from '.';

export default {
  title: 'CalendarWithPicker',
  component: CalendarWithPicker,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export const DefaultDatePicker = {
  args: {
    value: '07.04.2024',
    startOfWeek: StartDays.Monday,
    showHolidays: true,
    showWeekends: true,
    min: '10.12.2020',
    max: '10.02.2030',
  },
};
