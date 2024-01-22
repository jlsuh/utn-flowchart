export const replaceWhiteSpace = (str: string, replacement: string = "-") => {
  return str.replace(/\s+/g, replacement).toLowerCase();
};
