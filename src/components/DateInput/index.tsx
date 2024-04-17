import { ChangeEvent, useState, KeyboardEvent, useRef } from 'react';

import { DateInputProps } from '@/types/types';
import { validateInputDate } from '@/utils/isValidDate';

import {
  CalendarIconContainer,
  Container,
  DateInputField,
  ErrorValidation,
  InputLabel,
  Wrapper,
} from './styled';

import { CalendarIcon } from '../Icons/CalendarIcon';
import { CloseCalendarIcon } from '../Icons/CloseCalendarIcon';

export const DateInput = ({
  handleCalendarIconClick,
  handleDateSubmit,
  handleCalendarClearIconClick,
  inputDate,
  testId,
  isShow = true,
}: DateInputProps) => {
  const [inputValue, setInputValue] = useState<string>(inputDate);

  const inputRef = useRef<HTMLInputElement>(null);
  const inputValueRef = useRef(inputDate);

  const handleChangeInputDate = (e: ChangeEvent<HTMLInputElement>) => {
    const valueFromInput = e.target.value;
    const formattedValue = valueFromInput
      .replace(/\D/g, '')
      .replace(/(\d{2})(\d{2})(\d{4})/, '$1.$2.$3')
      .slice(0, 10);

    setInputValue(formattedValue);
    inputValueRef.current = formattedValue;
  };

  const handleCalendarClick = () => {
    handleCalendarIconClick((show) => !show);
  };

  const handleClearInput = () => {
    handleCalendarClearIconClick?.();
    setInputValue('');
  };

  const handleClickFocusInput = () => {
    inputRef.current?.focus();
  };

  const handleEnterPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && validateInputDate(inputValue)) {
      e.preventDefault();
      handleDateSubmit(inputValue);
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
            ref={inputRef}
            onChange={handleChangeInputDate}
            placeholder='Choose Date'
            onKeyDown={handleEnterPress}
            data-testid={testId}
            onClick={handleClickFocusInput}
          />
        </InputLabel>
        {isShow && inputValue.length > 0 && (
          <CalendarIconContainer
            onClick={handleClearInput}
            data-testid='clear-input'
          >
            <CloseCalendarIcon />
          </CalendarIconContainer>
        )}
      </Container>
      {!validateInputDate(inputValue) && <ErrorValidation>You enter invalid date</ErrorValidation>}
    </Wrapper>
  );
};
