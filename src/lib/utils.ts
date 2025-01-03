import { clsx, ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Combines and merges class names using clsx and tailwind-merge.
 * @param  {...ClassValue[]} inputs - Class names or conditional class inputs.
 * @returns {string} - Merged class name string.
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}

/**
 * Formats numbers as currency with a specified symbol.
 * @param {number} value - Numeric value to format.
 * @param {string} currency - Currency symbol to use (default: "৳").
 * @returns {string} - Formatted currency string.
 */
export function formatCurrency(value: number, currency: string = "৳"): string {
  if (typeof value !== "number") {
    throw new Error("Value must be a number");
  }
  return `${currency}${value.toFixed(2)}`;
}
