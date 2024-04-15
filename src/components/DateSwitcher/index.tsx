import { useContext } from 'react';

import { DateSwitcherProps } from '@/types/interfaces';
import { CellTypes } from '@/constants/cellTypes';
import { InputLogicContext } from '@/context/inputLogicContext';
import { SelectPrevDateIcon } from '@/components/Icons/SelectPrevDateIcon';
import { SelectNextDateIcon } from '@/components/Icons/SelectNextDateIcon';

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
