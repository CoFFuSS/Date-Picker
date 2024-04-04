import React from 'react';

import { StartDays } from '@/constants/startDays';
import { getDaysOfWeek } from '@/utils/getDaysOfWeek';

import { Container, HeaderCell, HeaderCellText } from './styled';

interface CalendarHeaderProps {
  startWeekWith: StartDays;
}

export const CalendarHeader = ({ startWeekWith }: CalendarHeaderProps) => {
  const daysOfWeek = getDaysOfWeek(startWeekWith);

  return (
    <Container>
      {daysOfWeek.map((day) => (
        <HeaderCell key={day}>
          <HeaderCellText>{day}</HeaderCellText>
        </HeaderCell>
      ))}
    </Container>
  );
};
