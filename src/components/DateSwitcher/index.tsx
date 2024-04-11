import { useContext } from 'react';

import SelectNextDateIcon from '@/assets/images/SelectNextDateIcon.svg';
import SelectPrevDateIcon from '@/assets/images/SelectPrevDateIcon.svg';
import { DateSwitcherProps } from '@/types/interfaces';
import { CellTypes } from '@/constants/cellTypes';
import { InputLogicContext } from '@/context/inputLogicContext';

import { Container, DateSelector, SwitcherDateButton, SwitcherDateLabel } from './styled';

export const DateSwitcher = ({ month }: DateSwitcherProps) => {
  const { onSwitchMonth } = useContext(InputLogicContext);

  return (
    <Container>
      <DateSelector onClick={onSwitchMonth(CellTypes.Prev)}>
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
      <DateSelector onClick={onSwitchMonth(CellTypes.Next)}>
        <SelectNextDateIcon />
      </DateSelector>
    </Container>
  );
};
