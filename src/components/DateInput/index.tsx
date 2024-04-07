import { ChangeEvent, useState, KeyboardEvent } from 'react';

import CalendarIcon from '@/assets/images/CalendarIcon.svg';
import CloseCalendarIcon from '@/assets/images/CloseCalendarIcon.svg';
import { DateInputProps } from '@/types/interfaces';
import { validateInputDate } from '@/utils/isValideDate';

import {
  CalendarIconContainer,
  Container,
  DateInputField,
  ErrorValidation,
  InputLabel,
  Wrapper,
} from './styled';

export const DateInput = ({ onCalendarIconClick, onSubmitDate }: DateInputProps) => {
  const [isValid, setIsValid] = useState<boolean>(true);
  const [isEmpty, setIsEmpty] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string>('');

  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => () => {
    setInputValue(e.target.value);
    validateInputDate(inputValue, setIsValid, setIsEmpty);
  };

  const handleCalendarClick = () => {
    onCalendarIconClick((show) => !show);
  };

  const handleClearInput = () => {
    setIsValid(true);
    setIsEmpty(true);
    setInputValue('');
  };

  const handleEnterPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      onSubmitDate(inputValue);
    }
  };

  return (
    <Wrapper>
      <Container>
        <CalendarIconContainer onClick={handleCalendarClick}>
          <CalendarIcon />
        </CalendarIconContainer>
        <InputLabel htmlFor='DateInput'>
          <DateInputField
            id='DateInput'
            type='text'
            value={inputValue}
            onChange={onInputChange}
            placeholder='Choose Date'
            onKeyDown={handleEnterPress}
          />
        </InputLabel>
        {isEmpty && (
          <CalendarIconContainer onClick={handleClearInput}>
            <CloseCalendarIcon />
          </CalendarIconContainer>
        )}
      </Container>
      {isValid && <ErrorValidation>You enter invalid date</ErrorValidation>}
    </Wrapper>
  );
};
