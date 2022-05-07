import { format } from "date-fns";

export const dateUtils = {
  formatDate: (date: Date) => format(date, "yyyy-MM-dd"),
  formatKRDate: (date: Date | string) =>
    format(
      typeof date === "string" ? new Date(date) : date,
      "yyyy년 MM월 dd일"
    ),
};
