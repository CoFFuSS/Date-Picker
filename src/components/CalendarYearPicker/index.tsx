import { useContext } from 'react';

import { ServiceDecoratorContext } from '@/context/serviceDecoratorContext';
import { getFormattedDate } from '@/utils/getFormattedDate';
import { CellTypes } from '@/constants/cellTypes';
import { InputLogicContext } from '@/context/inputLogicContext';
import { monthNames } from '@/constants/monthNames';

import { YearCell, YearCellWrapper } from './styled';

export const CalendarYearPicker = () => {
  const { year } = useContext(ServiceDecoratorContext);
  const { handleSelectDateValue } = useContext(InputLogicContext);

  return (
    <YearCellWrapper>
      {monthNames.map(({ monthNumber, monthName }) => {
        const formattedDate = getFormattedDate(1, monthNumber, year);

        return (
          <YearCell
            key={monthNumber}
            onClick={handleSelectDateValue?.(CellTypes.Current, formattedDate)}
          >
            {monthName}
          </YearCell>
        );
      })}
    </YearCellWrapper>
  );
};
