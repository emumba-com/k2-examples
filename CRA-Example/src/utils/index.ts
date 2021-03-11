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
 * Returns number as M formatted string e.g. 2500000 to 2.5M
 * @param num
 */
export function milFormatter(num: number) {
  if (num < 1e3) return num.toString();
  if (num >= 1e3) return +(num / 1e6).toFixed(1) + "M";
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

/**
 * Set Query params in string give base url and query params object
 * @param base
 * @param params
 */
export const applyQueryParams = (
  base: string,
  params: { [key: string]: string | number | boolean },
) => {
  return Object.entries(params)
    .filter(v => v[1])
    .reduce((prev: string, curr, index: number) => {
      prev = `${prev}${index === 0 ? "?" : "&"}${curr[0]}=${curr[1]}`;
      return prev;
    }, base);
};

/**
 * convert hex color to rgba with given opacity
 * @param hexCode
 * @param opacity
 */
export function convertHexToRGBA(hexCode: string, opacity: number) {
  let hex = hexCode.replace("#", "");

  if (hex.length === 3) {
    hex = `${hex[0]}${hex[0]}${hex[1]}${hex[1]}${hex[2]}${hex[2]}`;
  }

  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);

  return `rgba(${r},${g},${b},${opacity})`;
}
