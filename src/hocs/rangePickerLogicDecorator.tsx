import { ComponentType, Dispatch, SetStateAction, useCallback, useMemo, useState } from 'react';

import { DateInput } from '@/components/DateInput';
import { isValidRange, validateInputInRange } from '@/utils/isValidDate';
import { CellTypes } from '@/constants/cellTypes';
import { switchDate, updateDate } from '@/utils/updateDate';
import { InputLogicContext } from '@/context/inputLogicContext';
import { InputError } from '@/components/DateInput/styled';

export const rangePickerLogicDecorator =
  (
    Component: ComponentType<{}>,
    startDate: string,
    endDate: string,
    inputDate: string,
    setStartDate: Dispatch<SetStateAction<string>>,
    setEndDate: Dispatch<SetStateAction<string>>,
    setInputDate: Dispatch<SetStateAction<string>>,
    setIsShown: Dispatch<SetStateAction<boolean>>,
  ) =>
  () => {
    const [error, setError] = useState<string>('');
    const [isSelecting, setIsSelecting] = useState<boolean>(false);
    const [isSelectingYear, setIsSelectingYear] = useState<boolean>(false);

    const setSelectedDateValue = (type: CellTypes, value: string) => () => {
      const newDate = updateDate(value, type);

      setInputDate(newDate);
    };

    const handleStartDateEnter = (startValue: string) => {
      setInputDate(startValue);
      setStartDate(startValue);
      setEndDate('');
    };

    const handleEndDateEnter = (endValue: string) => {
      validateInputInRange(setEndDate, setError, startDate, endValue);
    };

    const onSwitchDate = useCallback(
      (type: CellTypes) => () => {
        const newDate = switchDate(inputDate, type, isSelectingYear);

        setInputDate(newDate);
      },
      [isSelectingYear],
    );

    const onSwitchHeaderClick = () => {
      setIsSelectingYear(true);
    };

    const onCalendarIconClick = () => {
      setIsShown((prev) => !prev);
    };

    const onCalendarClearIconClick = () => {
      setStartDate('');
      setEndDate('');
    };

    const handleMouseDown = (date: string) => () => {
      setStartDate(date);
      setEndDate('');
      setIsSelecting(true);
    };

    const handleMouseUp = (date: string) => () => {
      if (startDate === date) {
        setError('Choose range for at least two days');

        setTimeout(() => {
          setStartDate('');
          setEndDate('');
          setError('');
          setIsSelecting(false);
        }, 1000);

        return;
      }

      if (isValidRange(date, startDate)) {
        setEndDate(startDate);
        setStartDate(date);
        setIsSelecting(false);

        return;
      }

      setEndDate(date);
      setIsSelecting(false);
    };

    const handleMouseEnter = useCallback(
      (date: string) => () => {
        if (isSelecting) {
          setEndDate(date);
        }
      },
      [isSelecting],
    );

    const contextValue = useMemo(
      () => ({
        setSelectedDateValue,
        onSwitchDate,
        onSwitchHeaderClick,
        isSelectingYear,
        startDate,
        endDate,
        handleMouseUp,
        handleMouseDown,
        handleMouseEnter,
      }),
      [handleMouseEnter, isSelectingYear, onSwitchDate],
    );

    return (
      <InputLogicContext.Provider value={contextValue}>
        Select Start Date
        <DateInput
          onSubmitDate={handleStartDateEnter}
          onCalendarIconClick={onCalendarIconClick}
          onCalendarClearIconClick={onCalendarClearIconClick}
          inputDate={startDate}
          testId='start-input'
        />
        Select End Date
        <DateInput
          onSubmitDate={handleEndDateEnter}
          onCalendarIconClick={onCalendarIconClick}
          onCalendarClearIconClick={onCalendarClearIconClick}
          inputDate={endDate}
          testId='end-input'
          isShow={false}
        />
        {error && <InputError data-testid='range-picker-error'>{error}</InputError>}
        <Component />
      </InputLogicContext.Provider>
    );
  };
