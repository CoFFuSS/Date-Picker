import { createContext } from 'react';

import { CellTypes } from '@/constants/cellTypes';

export const InputLogicContext = createContext({
  setSelectedDateValue: (_type: CellTypes, _formattedDate: string) => () => {},
  onSwitchMonth: (_value: string, _type: CellTypes) => () => {},
});
