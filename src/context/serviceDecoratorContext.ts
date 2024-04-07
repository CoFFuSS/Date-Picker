import { createContext } from 'react';

export interface ServiceDecoratorContextValue {
  holidays: string[];
  year: number;
  month: number;
  day: number;
}

export const ServiceDecoratorContext = createContext<ServiceDecoratorContextValue>({
  holidays: [],
  year: 2024,
  month: 1,
  day: 1,
});
