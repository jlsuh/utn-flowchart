async function getVizInstance() {
  const viz = await import('@viz-js/viz');
  const instance = await viz.instance();
  return instance;
}

export default getVizInstance;
