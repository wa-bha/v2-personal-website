/**
 * @param start @example "August 2021"
 * @param end @example "November 2023" (optional if ongoing)
 * @returns Duration between two dates in years and months
 */
export const calculateDuration = (start: string, end?: string) => {
  const startDate = new Date(start);
  const endDate = end ? new Date(end) : new Date();

  const diffInMonths =
    (endDate.getFullYear() - startDate.getFullYear()) * 12 +
    (endDate.getMonth() - startDate.getMonth());

  const years = Math.floor(diffInMonths / 12);
  const months = diffInMonths % 12;

  return years > 0
    ? `${years} year${years > 1 ? "s" : ""}, ${months} month${months > 1 ? "s" : ""}`
    : `${months} month${months > 1 ? "s" : ""}`;
};
