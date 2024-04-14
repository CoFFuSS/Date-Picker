import { useContext } from 'react';

import { ServiceDecoratorContext } from '@/context/serviceDecoratorContext';

const Months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

export const CalendarYearPicker = () => {
  const { day } = useContext(ServiceDecoratorContext);

  return (
    <>
      {Months.map((month) => (
        <h1 key={month}>{month}</h1>
      ))}
    </>
  );
};
