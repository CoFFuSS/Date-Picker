export const splitDate = (value: string) => {
  const [day, month, year] = value.split('.').map(Number);

  return {
    day,
    month,
    year,
  } as const;
};
