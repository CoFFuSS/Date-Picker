import { ChangeEvent, useState, KeyboardEvent, useRef } from 'react';

import { DateInputProps } from '@/types/interfaces';
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
  onCalendarIconClick,
  onSubmitDate,
  onCalendarClearIconClick,
  inputDate,
  testId,
  isShow = true,
}: DateInputProps) => {
  const [isValid, setIsValid] = useState<boolean>(true);
  const [isEmpty, setIsEmpty] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string>(inputDate);

  const inputRef = useRef<HTMLInputElement>(null);
  const inputValueRef = useRef(inputDate);

  const changeInputDate = (e: ChangeEvent<HTMLInputElement>) => {
    const valueFromInput = e.target.value;
    const formattedValue = valueFromInput
      .replace(/\D/g, '')
      .replace(/(\d{2})(\d{2})(\d{4})/, '$1.$2.$3')
      .slice(0, 10);

    setInputValue(formattedValue);
    inputValueRef.current = formattedValue;
    validateInputDate(formattedValue, setIsValid, setIsEmpty);
  };

  const handleCalendarClick = () => {
    onCalendarIconClick((show) => !show);
  };

  const handleClearInput = () => {
    onCalendarClearIconClick?.();
    setIsValid(true);
    setIsEmpty(true);
    setInputValue('');
  };

  const focusInput = () => {
    inputRef.current?.focus();
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
        <InputLabel
          htmlFor='DateInput'
          onClick={focusInput}
        >
          <DateInputField
            id='DateInput'
            type='text'
            value={inputValue}
            ref={inputRef}
            onChange={changeInputDate}
            placeholder='Choose Date'
            onKeyDown={handleEnterPress}
            data-testid={testId}
          />
        </InputLabel>
        {isShow && !isEmpty && (
          <CalendarIconContainer
            onClick={handleClearInput}
            data-testid='clear-input'
          >
            <CloseCalendarIcon />
          </CalendarIconContainer>
        )}
      </Container>
      {!isValid && <ErrorValidation>You enter invalid date</ErrorValidation>}
    </Wrapper>
  );
};
