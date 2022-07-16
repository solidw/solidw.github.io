import { format } from "date-fns";

export const dateUtils = {
  formatDate: (date: Date) => date.toISOString(),
  formatDateToShow: (date: Date | string) =>
    format(typeof date === "string" ? new Date(date) : date, "yyyy. MM. dd."),
};
