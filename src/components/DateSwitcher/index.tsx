import { useContext } from 'react';

import SelectNextDateIcon from '@/assets/images/SelectNextDateIcon.svg';
import SelectPrevDateIcon from '@/assets/images/SelectPrevDateIcon.svg';
import { DateSwitcherProps } from '@/types/interfaces';
import { CellTypes } from '@/constants/cellTypes';
import { InputLogicContext } from '@/context/inputLogicContext';

import { Container, DateSelector, SwitcherDateButton, SwitcherDateLabel } from './styled';

export const DateSwitcher = ({ month, year }: DateSwitcherProps) => {
  const { isSelectingYear, onSwitchHeaderClick, onSwitchDate } = useContext(InputLogicContext);

  return (
    <Container>
      <DateSelector onClick={onSwitchDate(CellTypes.Prev)}>
        <SelectPrevDateIcon />
      </DateSelector>
      <SwitcherDateLabel htmlFor='DateSwitcher'>
        <SwitcherDateButton
          id='DateSwitcher'
          onClick={onSwitchHeaderClick}
        >
          {!isSelectingYear ? month : year}
        </SwitcherDateButton>
      </SwitcherDateLabel>
      <DateSelector onClick={onSwitchDate(CellTypes.Next)}>
        <SelectNextDateIcon />
      </DateSelector>
    </Container>
  );
};
