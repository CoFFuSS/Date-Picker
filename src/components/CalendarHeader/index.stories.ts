import type { Meta, StoryObj } from '@storybook/react';

import { StartDays } from '@/constants/startDays';

import { CalendarHeader } from '.';

const meta = {
  title: 'Example/CalendarHeader',
  component: CalendarHeader,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof CalendarHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    startWeekWith: StartDays.Monday,
  },
};
