import { ComponentType, Dispatch, SetStateAction, useMemo, useState } from 'react';

import { DateInput } from '@/components/DateInput';
import { validateInputInRange } from '@/utils/isValideDate';
import { CellTypes } from '@/constants/cellTypes';
import { splitDate } from '@/utils/splitDate';
import { getFormattedDate } from '@/utils/getFormattedDate';
import { updateDate } from '@/utils/updateDate';
import { InputLogicContext } from '@/context/inputLogicContext';

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
    const [isSelecting, setIsSelecting] = useState<boolean>(false);
    const [error, setError] = useState<string>('');

    const handleStartDateEnter = () => {
      validateInputInRange(setEndDate, setError, startDate, endDate);
    };

    const handleEndDateEnter = () => {
      validateInputInRange(setEndDate, setError, startDate, endDate);
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

      setEndDate(date);
      setIsSelecting(false);
    };

    const handleMouseEnter = (date: string) => () => {
      if (isSelecting) {
        setEndDate(date);
      }
    };

    const onSwitchMonth = (type: CellTypes) => () => {
      const { day, month, year } = splitDate(inputDate);

      const newValue =
        type === CellTypes.Next
          ? getFormattedDate(day, month + 1, year)
          : getFormattedDate(day, month - 1, year);

      const newDate = updateDate(newValue, type);

      setStartDate(newDate);
    };

    const onCalendarIconClick = () => {
      setIsShown((prev) => !prev);
    };

    const contextValue = useMemo(
      () => ({
        setSelectedDateValue: () => () => {},
        onSwitchMonth,
        handleMouseUp,
        handleMouseDown,
        handleMouseEnter,
        startDate,
        endDate,
      }),
      [],
    );

    return (
      <InputLogicContext.Provider value={contextValue}>
        Select Start Date
        <DateInput
          onSubmitDate={handleStartDateEnter}
          onCalendarIconClick={onCalendarIconClick}
          inputDate={startDate}
        />
        Select End Date
        <DateInput
          onSubmitDate={handleEndDateEnter}
          onCalendarIconClick={onCalendarIconClick}
          inputDate={endDate}
        />
        {error && <h1>{error}</h1>}
        <Component />
      </InputLogicContext.Provider>
    );
  };