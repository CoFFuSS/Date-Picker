import { StartDays } from '@/constants/startDays';

import { CalendarWithRangePicker } from '.';

export default {
  title: 'CalendarWithRange',
  component: CalendarWithRangePicker,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export const DefaultRangePicker = {
  args: {
    fromDate: '05.04.2024',
    toDate: '09.04.2024',
    startOfWeek: StartDays.Monday,
    showHolidays: true,
    showWeekends: true,
  },
};
