import { MouseEventHandler, createContext } from 'react';

import { CellTypes } from '@/constants/cellTypes';

interface InputLogicContextValue {
  setSelectedDateValue: (
    type: CellTypes,
    formattedDate: string,
  ) => MouseEventHandler<HTMLDivElement | undefined>;
}

export const InputLogicContext = createContext<InputLogicContextValue>({
  setSelectedDateValue: (_type: CellTypes, _formattedDate: string) => () => {},
});
