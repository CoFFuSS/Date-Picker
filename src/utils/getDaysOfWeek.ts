import { DAYS_OF_WEEK } from '@/constants/common';
import { StartDays } from '@/constants/startDays';

export const getDaysOfWeek = (startWeekWith: StartDays) => {
  if (startWeekWith === 'Monday') {
    return DAYS_OF_WEEK;
  }

  return [...DAYS_OF_WEEK.slice(-1), ...DAYS_OF_WEEK.slice(0, -1)];
};
