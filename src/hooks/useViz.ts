import { instance } from "@viz-js/viz";

export function useViz() {
  const renderSVG = (
    digraph: string,
    continuation: (svg: SVGElement) => void,
  ) => {
    instance().then(function (viz) {
      const svg = viz.renderSVGElement(digraph);
      continuation(svg);
    });
  };

  return {
    renderSVG,
  };
}
