import { ComponentType, useState } from 'react';

import { CalendarProps, CellDate } from '@/types/interfaces';
import { useHolidayRequest } from '@/hooks/useHolidayRequest';

export const serviceDecorator =
  (
    Component: ComponentType<CalendarProps>,
    dates: CellDate[],
    year: number,
    month: number,
    day: number,
  ) =>
  (props: Omit<CalendarProps, 'holidays | dates'>) => {
    const [holidays, setHolidays] = useState<string[]>([]);

    const [holidaysResponse] = useHolidayRequest(year, props);
    setHolidays(holidaysResponse);

    return (
      <Component
        {...props}
        holidays={holidays}
        dates={dates}
        year={year}
        month={month}
        day={day}
      />
    );
  };
