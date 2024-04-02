import React from 'react';

import { CalendarContainer } from './styled';

import { DateSwitcher } from '../DateSwitcher';

interface CalendarProps {
  isShown: boolean;
}

export const Calendar = ({ isShown }: CalendarProps) => (
  <CalendarContainer isShown={isShown}>
    <DateSwitcher />
  </CalendarContainer>
);
