import { createContext } from 'react';

import { CellTypes } from '@/constants/cellTypes';

export const InputLogicContext = createContext({
  setSelectedDateValue: (_type: CellTypes, _formattedDate: string) => () => {},
  onSwitchMonth: (_type: CellTypes) => () => {},
  startDate: '',
  endDate: '',
  handleMouseUp: (_value: string) => () => {},
  handleMouseDown: (_value: string) => () => {},
  handleMouseEnter: (_value: string) => () => {},
});
