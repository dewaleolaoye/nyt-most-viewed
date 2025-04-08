import { parseISO, format } from "date-fns";

export function formatDate(date: string) {
  const value = format(parseISO(date), 'MMM dd, yyyy');
  return value;
}