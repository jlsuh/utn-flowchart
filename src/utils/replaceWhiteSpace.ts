export const replaceWhiteSpace = (str: string, replacement = '-') => {
  return str.replace(/\s+/g, replacement).toLowerCase();
};
