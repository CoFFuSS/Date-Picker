import { useContext } from 'react';

import { DateSwitcherProps } from '@/types/types';
import { CellTypes } from '@/constants/cellTypes';
import { InputLogicContext } from '@/context/inputLogicContext';
import { SelectPrevDateIcon } from '@/components/Icons/SelectPrevDateIcon';
import { SelectNextDateIcon } from '@/components/Icons/SelectNextDateIcon';

import { Container, DateSelector, SwitcherDateButton, SwitcherDateLabel } from './styled';

export const DateSwitcher = ({ month, year }: DateSwitcherProps) => {
  const { isSelectingYear, handleSwitchHeaderClick, handleDateSwitch } =
    useContext(InputLogicContext);

  return (
    <Container>
      <DateSelector onClick={handleDateSwitch(CellTypes.Prev)}>
        <SelectPrevDateIcon />
      </DateSelector>
      <SwitcherDateLabel htmlFor='dateSwitcher'>
        <SwitcherDateButton
          id='dateSwitcher'
          onClick={handleSwitchHeaderClick}
        >
          {!isSelectingYear ? month : year}
        </SwitcherDateButton>
      </SwitcherDateLabel>
      <DateSelector onClick={handleDateSwitch(CellTypes.Next)}>
        <SelectNextDateIcon />
      </DateSelector>
    </Container>
  );
};
