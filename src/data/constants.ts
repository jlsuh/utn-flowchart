const modes = {
  ANNUAL: 'Anual',
  QUADRIMESTRAL: 'Cuatrimestral',
} as const;

const options = {
  annualSubject: `shape="box"`,
  globalArrowSize: `arrowsize="0.5"`,
  globalDigraph: `ranksep="3"rankdir="BT"nodesep="0.3"`,
  takenTransitionEdgeStyle: `style="dotted"penwidth="2"`,
} as const;

const statuses = {
  PENDING: {
    name: 'Falta cursada',
    color: '#d3d3d3',
  },
  IN_PROGRESS: {
    name: 'Cursando',
    color: '#00BFFF',
  },
  NEED_FINAL_EXAM: {
    name: 'Firmada',
    color: '#FFA500',
  },
  PASSED: {
    name: 'Aprobada',
    color: '#4CAF50',
  },
} as const;

const DEFAULT_STATUS = statuses.PENDING;

export { DEFAULT_STATUS, modes, options, statuses };
