import { useEffect, useState } from 'react';

import { CalendarProps } from '@/types/interfaces';
import { getHolidays } from '@/api/getHolidays';

export const useHolidayRequest = (year: number, props: Omit<CalendarProps, 'holidays | dates'>) => {
  const [response, setResponse] = useState<string[]>([]);
  const { showHolidays } = props;

  useEffect(() => {
    if (showHolidays) {
      const fetchHolidays = async () => {
        const fetchResponse = await getHolidays(year);
        setResponse(fetchResponse);
      };

      fetchHolidays();
    }
  }, [showHolidays, year]);

  return [response] as const;
};
