import { AnyObject } from "#/types";

export function objectifyBy<T extends AnyObject>(array: T[], by: keyof T) {
  return array.reduce((acc, item) => {
    const { [by]: _by, ...values } = item;
    if (_by == null) {
      throw new Error("objectifyBy: Wrong [by]");
    }

    acc[_by] = values;
    return acc;
  }, {} as AnyObject);
}

export function objectifyById<T extends { id: number }>(
  array: T[]
): Record<number, Omit<T, "id">> {
  return objectifyBy(array, "id") as Record<number, Omit<T, "id">>;
}
