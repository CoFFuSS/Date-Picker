import { createContext } from 'react';

import { CellTypes } from '@/constants/cellTypes';

export const InputLogicContext = createContext({
  setSelectedDateValue: (_type: CellTypes, _formattedDate: string) => () => {},
  onSwitchMonth: (_type: CellTypes) => () => {},
});
