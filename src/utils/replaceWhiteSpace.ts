function replaceWhiteSpace(str: string, replacement = '-') {
  return str.replace(/\s+/g, replacement).toLowerCase();
}

export default replaceWhiteSpace;
