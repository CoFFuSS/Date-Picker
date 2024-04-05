import { ChangeEvent } from 'react';

import CalendarIcon from '@/assets/images/CalendarIcon.svg';
import CloseCalendarIcon from '@/assets/images/CloseCalendarIcon.svg';

import { CalendarIconContainer, Container, DateInputField, InputLabel } from './styled';

interface DateInputProps {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => () => void;
  onCalendarClick: () => void;
  onCloseCalendarClick: () => void;
}

export const DateInput = ({
  value,
  onChange,
  onCalendarClick,
  onCloseCalendarClick,
}: DateInputProps) => (
  <Container>
    <CalendarIconContainer onClick={onCalendarClick}>
      <CalendarIcon />
    </CalendarIconContainer>
    <InputLabel htmlFor='DateInput'>
      <DateInputField
        id='DateInput'
        type='text'
        value={value}
        onChange={onChange}
        placeholder='Choose Date'
      />
    </InputLabel>
    <CalendarIconContainer onClick={onCloseCalendarClick}>
      <CloseCalendarIcon />
    </CalendarIconContainer>
  </Container>
);
