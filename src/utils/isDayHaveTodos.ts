import { Todo } from '@/types/interfaces';

import { getFormattedDate } from './getFormattedDate';

export const isDayHaveTodos = (day: number, month: number, year: number, todo: Todo[]) => {
  const currentDate = getFormattedDate(day, month, year);
  const filteredTodos = todo.filter(({ createdAt }) => createdAt === currentDate);

  return filteredTodos.length > 0;
};
