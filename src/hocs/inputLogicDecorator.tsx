import { ComponentType, Dispatch, SetStateAction, useCallback, useMemo, useState } from 'react';

import { isDateInRange } from '@/utils/isDateInRange';
import { switchDate, updateDate } from '@/utils/updateDate';
import { CellTypes } from '@/constants/cellTypes';
import { DateInput } from '@/components/DateInput';
import { InputLogicContext } from '@/context/inputLogicContext';
import { InputError } from '@/components/DateInput/styled';

export const inputLogicDecorator =
  (
    Component: ComponentType<{}>,
    inputDate: string,
    setInputValue: Dispatch<SetStateAction<string>>,
    setSelectedValue: Dispatch<SetStateAction<string>>,
    setIsShown: Dispatch<SetStateAction<boolean>>,
    max: string | undefined,
    min: string | undefined,
  ) =>
  () => {
    const [isDateValid, setIsDateValid] = useState<boolean>(true);
    const [isSelectingYear, setIsSelectingYear] = useState<boolean>(false);

    const onSubmitDate = (value: string) => {
      if (!isDateInRange(value, min, max)) {
        setIsDateValid(false);
      } else {
        setIsDateValid(true);
        setInputValue(value);
        setSelectedValue(value);
      }
    };

    const setSelectedDateValue = (type: CellTypes, value: string) => () => {
      const newDate = updateDate(value, type);

      if (!isDateInRange(newDate, min, max)) {
        setIsDateValid(false);
      } else {
        setIsDateValid(true);
        setInputValue(newDate);
        setSelectedValue(value);
      }
    };

    const onSwitchDate = useCallback(
      (type: CellTypes) => () => {
        const newDate = switchDate(inputDate, type, isSelectingYear);

        if (!isDateInRange(newDate, min, max)) {
          setIsDateValid(false);
        } else {
          setIsDateValid(true);
          setInputValue(newDate);
        }
      },
      [isSelectingYear],
    );

    const onSwitchHeaderClick = () => {
      setIsSelectingYear(true);
    };

    const onCalendarIconClick = () => {
      setIsShown((prev) => !prev);
    };

    const contextValue = useMemo(
      () => ({
        setSelectedDateValue,
        onSwitchDate,
        onSwitchHeaderClick,
        isSelectingYear,
        startDate: '',
        endDate: '',
        handleMouseUp: () => () => {},
        handleMouseDown: () => () => {},
        handleMouseEnter: () => () => {},
      }),
      [isSelectingYear, onSwitchDate],
    );

    return (
      <>
        <InputLogicContext.Provider value={contextValue}>
          <DateInput
            onSubmitDate={onSubmitDate}
            onCalendarIconClick={onCalendarIconClick}
            inputDate={inputDate}
            testId='input'
          />
          {!isDateValid && (
            <InputError>
              Your date is either more than {max} or less than {min}
            </InputError>
          )}
          <Component />
        </InputLogicContext.Provider>
      </>
    );
  };
