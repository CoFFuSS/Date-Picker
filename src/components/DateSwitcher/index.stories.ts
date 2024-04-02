import { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { DateSwitcher } from '.';

const meta = {
  title: 'Example/DateSwitcher',
  component: DateSwitcher,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: { onDateSwitchClick: fn() },
} satisfies Meta<typeof DateSwitcher>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    value: 'November 2022',
  },
};
