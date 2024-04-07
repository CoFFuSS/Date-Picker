import { fn } from '@storybook/test';
import type { Meta, StoryObj } from '@storybook/react';

import { DateInput } from '.';

const meta = {
  title: 'Example/DateInput',
  component: DateInput,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: { onCalendarIconClick: fn() },
} satisfies Meta<typeof DateInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = { args: { onCalendarIconClick: fn(), onSubmitDate: fn() } };
