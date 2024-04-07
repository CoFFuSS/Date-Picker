import type { Meta, StoryObj } from '@storybook/react';

import { StartDays } from '@/constants/startDays';

import { CalendarWithPicker } from '.';

const meta = {
  title: 'Example/CalendarWithPicker',
  component: CalendarWithPicker,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof CalendarWithPicker>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    value: '22.04.2024',
    startOfWeek: StartDays.Monday,
    showHolidays: true,
    showWeekends: true,
    min: '01.01.2022',
    max: '31.12.2025',
  },
};
