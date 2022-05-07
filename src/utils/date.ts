import { format } from "date-fns";

export const dateUtils = {
  formatDate: (date: Date) => format(date, "yyyy-MM-dd"),
  formatDateToShow: (date: Date | string) =>
    format(typeof date === "string" ? new Date(date) : date, "yyyy. MM. dd."),
};
