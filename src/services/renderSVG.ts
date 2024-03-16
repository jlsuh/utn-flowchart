import { instance } from '@viz-js/viz';

async function renderSVG(
  digraph: string,
  continuation: (svg: SVGElement) => void,
) {
  const viz = await instance();
  const svg = viz.renderSVGElement(digraph);
  continuation(svg);
}

export default renderSVG;
