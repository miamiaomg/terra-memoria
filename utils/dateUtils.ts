export const formatDateRange = (startTimestamp: number, endTimestamp?: number): string => {
  const start = new Date(startTimestamp);
  const end = endTimestamp ? new Date(endTimestamp) : null;

  const options: Intl.DateTimeFormatOptions = { month: 'short', day: 'numeric', year: 'numeric' };
  
  if (!end || start.getTime() === end.getTime()) {
    return start.toLocaleDateString('en-US', options);
  }

  const startYear = start.getFullYear();
  const endYear = end.getFullYear();
  const startMonth = start.getMonth();
  const endMonth = end.getMonth();

  // Different Years: Dec 28, 2021 - Jan 4, 2022
  if (startYear !== endYear) {
    return `${start.toLocaleDateString('en-US', options)} - ${end.toLocaleDateString('en-US', options)}`;
  }

  // Same Year, Different Months: Jan 28 - Feb 2, 2021
  if (startMonth !== endMonth) {
    return `${start.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })} - ${end.toLocaleDateString('en-US', options)}`;
  }

  // Same Month: Jan 1 - 5, 2021
  return `${start.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })} - ${end.getDate()}, ${endYear}`;
};
