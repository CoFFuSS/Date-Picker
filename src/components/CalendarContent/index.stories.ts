import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { StartDays } from '@/constants/startDays';
import { getCalendarData } from '@/utils/getCalendarData';

import { CalendarContent } from '.';

const meta = {
  title: 'Example/CalendarContent',
  component: CalendarContent,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof CalendarContent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    dates: getCalendarData(2024, 4, StartDays.Monday),
    showWeekends: true,
    holidays: ['2024-04-12'],
    selectedDay: '2024-04-11',
    setSelectedDateValue: fn(),
  },
};
