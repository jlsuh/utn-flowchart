import importViz from './importViz';

async function getVizInstance() {
  const viz = await importViz();
  return viz.instance();
}

export default getVizInstance;
