export const getHolidays = (year: number) =>
  fetch(`https://date.nager.at/api/v3/PublicHolidays/${year}/BY`)
    .then((res) => res.json())
    .then((res: string[]) => res);
