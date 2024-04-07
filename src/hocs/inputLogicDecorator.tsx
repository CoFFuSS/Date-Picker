import { ComponentType, Dispatch, SetStateAction, useMemo, useState } from 'react';

import { isDateInRange } from '@/utils/isDateInRange';
import { updateDate } from '@/utils/updateDate';
import { CellTypes } from '@/constants/cellTypes';
import { DateInput } from '@/components/DateInput';
import { InputLogicContext } from '@/context/inputLogicContext';

export const inputLogicDecorator =
  (
    Component: ComponentType<{}>,
    setInputValue: Dispatch<SetStateAction<string>>,
    setIsShown: Dispatch<SetStateAction<boolean>>,
    max: string | undefined,
    min: string | undefined,
  ) =>
  () => {
    const [isDateValid, setIsDateValid] = useState<boolean>(true);

    const onSubmitDate = (value: string) => {
      if (!isDateInRange(value, max, min)) {
        setIsDateValid(false);
      } else {
        setIsDateValid(true);
        setInputValue(value);
      }
    };

    const setSelectedDateValue = (type: CellTypes, value: string) => () => {
      const newDate = updateDate(value, type);

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
