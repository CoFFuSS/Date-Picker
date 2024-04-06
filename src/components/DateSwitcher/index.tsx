import SelectNextDateIcon from '@/assets/images/SelectNextDateIcon.svg';
import SelectPrevDateIcon from '@/assets/images/SelectPrevDateIcon.svg';
import { DateSwitcherProps } from '@/types/interfaces';

import { Container, DateSelector, SwitcherDateButton, SwitcherDateLabel } from './styled';

export const DateSwitcher = ({ month }: DateSwitcherProps) => (
  <Container>
    <DateSelector>
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
    <DateSelector>
      <SelectNextDateIcon />
    </DateSelector>
  </Container>
);
