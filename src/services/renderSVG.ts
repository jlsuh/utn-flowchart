import getVizInstance from './getVizInstance';

async function renderSVG(
  digraph: string,
  continuation: (svg: SVGElement) => void,
) {
  const vizInstance = await getVizInstance();
  const svg = vizInstance.renderSVGElement(digraph);
  continuation(svg);
}

export default renderSVG;
