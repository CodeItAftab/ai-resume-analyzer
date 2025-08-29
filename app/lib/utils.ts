import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Formats a file size in bytes to a human-readable string (e.g., KB, MB, GB).
 * @param bytes - The file size in bytes.
 * @returns A formatted string representing the file size.
 */

export function formatSize(bytes: number): string {
  if (bytes === 0) return "0 Bytes";

  const k = 1024;
  const sizes = ["Bytes", "KB", "MB", "GB", "TB"];

  // Determine the index of the size array
  const i = Math.floor(Math.log(bytes) / Math.log(k));

  // Format the size with two decimal places and round

  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
}

/**
 * Generates a UUID (Universally Unique Identifier).
 * @returns A string representing the generated UUID.
 */

export const generateUUID = () => crypto.randomUUID();

/**
 * Utility function to conditionally join class names.
 * @param classes - An array of class names, which can be strings, undefined, or false.
 * @returns A single string with all valid class names joined by spaces.
 * @example
 * cn('class1', undefined, 'class2', false, 'class3')
 * // returns 'class1 class2 class3'
 */

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
