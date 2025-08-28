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
