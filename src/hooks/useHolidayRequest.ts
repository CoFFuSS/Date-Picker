import { useEffect, useState } from 'react';

import { getHolidays } from '@/api/getHolidays';
import { splitDate } from '@/utils/splitDate';
import { getFormattedDate } from '@/utils/getFormattedDate';
import { Holiday } from '@/types/interfaces';

const CACHE_EXPIRATION_TIME = 24 * 60 * 60 * 1000;

export const useHolidayRequest = (
  year: number,
  showHolidays: boolean,
): [string[], unknown | null] => {
  const [response, setResponse] = useState<string[]>([]);
  const [apiError, setApiError] = useState<unknown | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const cachedHolidays = localStorage.getItem(`holidays_${year}`);
        const cachedDate = localStorage.getItem(`holidays_${year}_timestamp`);
        const currentTime = new Date().getTime();

        if (cachedHolidays && cachedDate) {
          const parsedHolidays: Holiday[] = JSON.parse(cachedHolidays);
          const cachedTime = parseInt(cachedDate, 10);

          if (currentTime - cachedTime < CACHE_EXPIRATION_TIME) {
            const formattedHolidays: string[] = parsedHolidays.map((holiday) => {
              const { day, month, year: resYear } = splitDate(holiday.date);

              return getFormattedDate(day, month, resYear);
            });

            setResponse(formattedHolidays);

            return;
          }
        }

        const fetchResponse: Holiday[] = await getHolidays(year);

        const formattedResponse: string[] = fetchResponse.map((holiday) => {
          const { day, month, year: resYear } = splitDate(holiday.date);

          return getFormattedDate(day, month, resYear);
        });

        setResponse(formattedResponse);

        localStorage.setItem(`holidays_${year}`, JSON.stringify(formattedResponse));
        localStorage.setItem(`holidays_${year}_timestamp`, String(currentTime));

        setApiError(null);
      } catch (error) {
        setApiError(error);
      }
    };

    if (showHolidays) {
      fetchData();
    }
  }, [showHolidays, year]);

  return [response, apiError];
};
