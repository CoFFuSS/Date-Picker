import SelectNextDateIcon from '@/assets/images/SelectNextDateIcon.svg';
import SelectPrevDateIcon from '@/assets/images/SelectPrevDateIcon.svg';

import { Container, DateSelector, SwitcherDateButton, SwitcherDateLabel } from './styled';

interface DateSwitcherProps {
  value: string;
  onDateSwitchClick: () => void;
}

export const DateSwitcher = ({ value, onDateSwitchClick }: DateSwitcherProps) => (
  <Container>
    <DateSelector>
      <SelectPrevDateIcon />
    </DateSelector>
    <SwitcherDateLabel htmlFor='DateSwitcher'>
      <SwitcherDateButton
        id='DateSwitcher'
        type='submit'
        onClick={onDateSwitchClick}
      >
        {value}
      </SwitcherDateButton>
    </SwitcherDateLabel>
    <DateSelector>
      <SelectNextDateIcon />
    </DateSelector>
  </Container>
);
