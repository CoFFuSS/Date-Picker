import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { getCalendarData } from '@/utils/getCalendarData';
import { StartDays } from '@/constants/startDays';

import { Calendar } from '.';

const meta = {
  title: 'Example/Calendar',
  component: Calendar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: { setSelectedDateValue: fn() },
} satisfies Meta<typeof Calendar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    isShown: true,
    dates: getCalendarData(2024, 4, StartDays.Monday),
    holidays: ['2024-04-12'],
    showWeekends: true,
    startWeekWith: StartDays.Monday,
    selectedDay: '2024-04-11',
  },
};
