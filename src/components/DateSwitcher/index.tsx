import { useContext } from 'react';

import SelectNextDateIcon from '@/assets/images/SelectNextDateIcon.svg';
import SelectPrevDateIcon from '@/assets/images/SelectPrevDateIcon.svg';
import { DateSwitcherProps } from '@/types/interfaces';
import { CalendarContext } from '@/context/CalendarContext';
import { CellTypes } from '@/constants/cellTypes';
import { InputLogicContext } from '@/context/inputLogicContext';

import { Container, DateSelector, SwitcherDateButton, SwitcherDateLabel } from './styled';

export const DateSwitcher = ({ month }: DateSwitcherProps) => {
  const { inputDate } = useContext(CalendarContext);
  const { onSwitchMonth } = useContext(InputLogicContext);

  const handlePrevMonth = () => {
    console.log('PREVCLICKED');

    onSwitchMonth(inputDate, CellTypes.Prev);
  };

  const handleNextMonth = () => {
    console.log('NEXTCLICKED');

    onSwitchMonth(inputDate, CellTypes.Next);
  };

  return (
    <Container>
      <DateSelector onClick={handlePrevMonth}>
        <SelectPrevDateIcon />
      </DateSelector>
      <SwitcherDateLabel htmlFor='DateSwitcher'>
        <SwitcherDateButton
          id='DateSwitcher'
          type='submit'
        >
          {month}
        </SwitcherDateButton>
      </SwitcherDateLabel>
      <DateSelector onClick={handleNextMonth}>
        <SelectNextDateIcon />
      </DateSelector>
    </Container>
  );
};
