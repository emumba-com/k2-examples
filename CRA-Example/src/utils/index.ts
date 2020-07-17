import { fullMonthNames } from "../constants";
export const getNumbers = (value: string) => parseFloat(value);
export const getFormattedNumbers = (value: any) => value.toLocaleString("en");
/**
 * Simple object check.
 * @param item
 * @returns {boolean}
 */
export function isObject(item: any) {
  return item && typeof item === "object" && !Array.isArray(item);
}

/**
 * Deep merge two objects.
 * @param target
 * @param ...sources
 */
export function mergeDeep(target: any, ...sources: any): any {
  if (!sources.length) return target;
  const source = sources.shift();

  if (isObject(target) && isObject(source)) {
    for (const key in source) {
      if (isObject(source[key])) {
        if (!target[key]) Object.assign(target, { [key]: {} });
        mergeDeep(target[key], source[key]);
      } else {
        Object.assign(target, { [key]: source[key] });
      }
    }
  }

  return mergeDeep(target, ...sources);
}

/**
 * Returns number as k formatted string e.g. 2500 to 2.5k
 * @param num
 */
export function kFormatter(num: number) {
  if (num < 1e3) return num.toString();
  if (num >= 1e3) return +(num / 1e3).toFixed(1) + "k";
}

/**
 * Returns date as year and month e.g. Jan 2020
 * @param date
 */
export function getMonthYearFromDate(date: Date) {
  const dateParts = date.toDateString().split(" ");
  return `${fullMonthNames[date.getMonth()]} ${dateParts[3]}`;
}

/**
 * Returns formatted date string
 * @param date
 */
export function getFormattedDate(date: Date) {
  const dateParts = date
    .toISOString()
    .split("T")[0]
    .split("-");
  const timeParts = date.toLocaleTimeString().split(" ");
  const formattedDate = `${dateParts[2]}-${dateParts[1]}-${
    dateParts[0]
  } ${timeParts[0].slice(0, -3)} ${timeParts[1]}`;
  return formattedDate;
}

/**
 * Returns Quarter number of time
 * @param time
 */
export const getQuarter = time =>
  Math.floor((new Date(time).getMonth() + 3) / 3);
