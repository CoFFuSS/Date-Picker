import { useEffect, useState } from 'react';

import { getHolidays } from '@/api/getHolidays';
import { getFormattedDate, splitDashDate } from '@/utils/getFormattedDate';
import { Holiday } from '@/types/interfaces';

const CACHE_EXPIRATION_TIME = 7 * 24 * 60 * 60 * 1000; // 7 days in milliseconds

export const useHolidayRequest = (
  year: number,
  showHolidays: boolean,
): [string[], unknown | null] => {
  const [response, setResponse] = useState<string[]>([]);
  const [apiError, setApiError] = useState<unknown | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const cachedResponse = localStorage.getItem(`holidayData_${year}`);
      const cachedTimestamp = localStorage.getItem(`holidayData_${year}_timestamp`);
      const currentTime = new Date().getTime();

      if (cachedResponse && cachedTimestamp) {
        const parsedResponse: string[] = JSON.parse(cachedResponse);
        const cachedTime = parseInt(cachedTimestamp, 10);

        if (currentTime - cachedTime < CACHE_EXPIRATION_TIME) {
          if (!showHolidays) {
            setResponse([]);

            return;
          }

          setResponse(parsedResponse);

          return;
        }
      }

      const fetchResponse: Holiday[] = await getHolidays(year);
      const formattedResponse: string[] = fetchResponse.map((holiday) => {
        const { day, month, year: resYear } = splitDashDate(holiday.date);

        return getFormattedDate(day, month, resYear);
      });

      if (!showHolidays) {
        setResponse([]);
      } else {
        setResponse(formattedResponse);

        localStorage.setItem(`holidayData_${year}`, JSON.stringify(formattedResponse));
        localStorage.setItem(`holidayData_${year}_timestamp`, String(currentTime));
      }

      setApiError(null);
    };

    fetchData();
  }, [year, showHolidays]);

  return [response, apiError];
};
