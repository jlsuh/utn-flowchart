export const replaceWhiteSpace = (
  str: string,
  replacement: string = "-",
): string => {
  return str.replace(/\s+/g, replacement).toLowerCase();
};
