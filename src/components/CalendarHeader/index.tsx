import { getDaysOfWeek } from '@/utils/getDaysOfWeek';
import { CalendarHeaderProps } from '@/types/types';

import { Container, HeaderCell, HeaderCellText } from './styled';

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
