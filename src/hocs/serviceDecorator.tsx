import { ComponentType, useContext, useMemo } from 'react';

import { ServiceDecoratorContext } from '@/context/serviceDecoratorContext';
import { useHolidayRequest } from '@/hooks/useHolidayRequest';
import { CalendarContext } from '@/context/CalendarContext';

export const serviceDecorator =
  (Component: ComponentType<{}>, day: number, month: number, year: number) => () => {
    const { showHolidays } = useContext(CalendarContext);

    const [holidaysResponse] = useHolidayRequest(year, showHolidays);

    const contextValue = useMemo(
      () => ({
        holidays: holidaysResponse,
        year,
        month,
        day,
      }),
      [holidaysResponse],
    );

    return (
      <ServiceDecoratorContext.Provider value={contextValue}>
        <Component />
      </ServiceDecoratorContext.Provider>
    );
  };
