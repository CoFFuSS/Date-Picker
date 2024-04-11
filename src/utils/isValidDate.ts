import { Dispatch, SetStateAction } from 'react';

const datePatternRegexp =
  /^(0[1-9]|[12][0-9]|3[01])\.(0[1-9]|1[012])\.(19|20|21|22|23|24|25)\d{2}$/;

export const validateInputDate = (
  inputValue: string,
  setIsValid: Dispatch<SetStateAction<boolean>>,
  setIsEmpty: Dispatch<SetStateAction<boolean>>,
) => {
  if (inputValue.length > 9 && !datePatternRegexp.test(inputValue)) {
    const [day, month, year] = inputValue.split('.').map(Number);
    const { length } = inputValue.split('.');
    const maxDay = new Date(year, month, 0).getDate();

    if (day >= maxDay || month > 12 || length > 2) {
      setIsValid(false);
    }
  } else {
    setIsValid(true);
    setIsEmpty(inputValue.length < 1);
  }
};

export const isValidRange = (startDate: string, endDate: string) => {
  const [startDay, startMonth, startYear] = startDate.split('.').map(Number);
  const [endDay, endMonth, endYear] = endDate.split('.').map(Number);

  const fromDate = new Date(startYear, startMonth - 1, startDay);
  const toDate = new Date(endYear, endMonth - 1, endDay);

  return fromDate < toDate;
};

export const validateInputInRange = (
  setEndDate: Dispatch<SetStateAction<string>>,
  setError: Dispatch<SetStateAction<string>>,
  startDate: string,
  endDate: string,
) => {
  if (isValidRange(startDate, endDate)) setEndDate(endDate);
  else setError('Invalid range');
};
