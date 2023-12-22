export const composeSVGObjectURL = (svg: SVGElement) => {
  const asText = new XMLSerializer().serializeToString(svg);
  const blob = new Blob([asText], { type: "image/svg+xml" });
  return URL.createObjectURL(blob);
};
