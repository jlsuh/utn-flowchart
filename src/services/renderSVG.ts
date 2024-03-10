import { instance } from '@viz-js/viz';

export const renderSVG = async (
  digraph: string,
  continuation: (svg: SVGElement) => void,
) => {
  const viz = await instance();
  const svg = viz.renderSVGElement(digraph);
  continuation(svg);
};
