import { StartDays } from '@/constants/startDays';

const daysOfWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

export const getDaysOfWeek = (startWeekWith: StartDays) => {
  if (startWeekWith === 'Monday') {
    return daysOfWeek;
  }

  return [...daysOfWeek.slice(-1), ...daysOfWeek.slice(0, -1)];
};
