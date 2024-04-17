import { createContext } from 'react';

import { CellTypes } from '@/constants/cellTypes';

export const InputLogicContext = createContext({
  handleSelectDateValue: (_type: CellTypes, _formattedDate: string) => () => {},
  handleDateSwitch: (_type: CellTypes) => () => {},
  handleSwitchHeaderClick: () => {},
  isSelectingYear: false,
  startDate: '',
  endDate: '',
  handleMouseUp: (_value: string) => () => {},
  handleMouseDown: (_value: string) => () => {},
  handleMouseEnter: (_value: string) => () => {},
});
