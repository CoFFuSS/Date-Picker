import { ComponentType, Dispatch, SetStateAction, useMemo, useState } from 'react';

import { isDateInRange } from '@/utils/isDateInRange';
import { updateDate } from '@/utils/updateDate';
import { CellTypes } from '@/constants/cellTypes';
import { DateInput } from '@/components/DateInput';
import { InputLogicContext } from '@/context/inputLogicContext';
import { splitDate } from '@/utils/splitDate';
import { getFormattedDate } from '@/utils/getFormattedDate';

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

    const onSwitchMonth = (type: CellTypes) => () => {
      const { day, month, year } = splitDate(inputDate);

      const newValue =
        type === CellTypes.Next
          ? getFormattedDate(day, month + 1, year)
          : getFormattedDate(day, month - 1, year);

      const newDate = updateDate(newValue, type);

      if (!isDateInRange(newDate, min, max)) {
        setIsDateValid(false);
      } else {
        setIsDateValid(true);
        setInputValue(newDate);
      }
    };

    const onCalendarIconClick = () => {
      setIsShown((prev) => !prev);
    };

    const contextValue = useMemo(
      () => ({
        setSelectedDateValue,
        onSwitchMonth,
      }),
      [],
    );

    return (
      <>
        <InputLogicContext.Provider value={contextValue}>
          <DateInput
            onSubmitDate={onSubmitDate}
            onCalendarIconClick={onCalendarIconClick}
          />
          {!isDateValid && (
            <h1>
              Your date is either more than {max} or less than {min}
            </h1>
          )}
          <Component />
        </InputLogicContext.Provider>
      </>
    );
  };
