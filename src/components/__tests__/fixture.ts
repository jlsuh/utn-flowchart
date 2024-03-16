import { DEFAULT_STATUS, modes } from '@/data';
import type { ContextPlan, DataPlan, PlanContextProps } from '@/types';

const id1 = 'subject-1';
const id2 = 'subject-2';
const id3 = 'subject-3';
const id4 = 'subject-4';
const planId1 = 'plan-1';
const planId2 = 'plan-2';
const subjectName1 = 'Subject 1';
const subjectName2 = 'Subject 2';

const contextPlan: ContextPlan = {
  id: planId1,
  branch: 'planBranch-1',
  subjects: {
    [id1]: {
      id: id1,
      modes: [modes.ANNUAL],
      name: subjectName1,
      passed: [],
      status: DEFAULT_STATUS,
      taken: [],
    },
    [id2]: {
      id: id2,
      modes: [modes.ANNUAL],
      name: subjectName2,
      passed: [],
      status: DEFAULT_STATUS,
      taken: [],
    },
  },
};
const subject = {
  id: id1,
  modes: [modes.ANNUAL, modes.QUADRIMESTRAL],
  name: subjectName1,
  passed: [],
  status: DEFAULT_STATUS,
  taken: [],
};
const plan1: DataPlan = {
  branch: 'planBranch-1',
  id: planId1,
  subjects: [
    [
      {
        id: id1,
        modes: [modes.ANNUAL, modes.QUADRIMESTRAL],
        name: subjectName1,
        passed: [],
        status: DEFAULT_STATUS,
        taken: [],
      },
    ],
    [
      {
        id: id2,
        modes: [modes.ANNUAL],
        name: 'Subject 2',
        passed: [],
        status: DEFAULT_STATUS,
        taken: [],
      },
    ],
  ],
};
const plan2: DataPlan = {
  branch: 'planBranch-2',
  id: planId2,
  subjects: [
    [
      {
        id: id3,
        modes: [modes.ANNUAL, modes.QUADRIMESTRAL],
        name: 'Subject 3',
        passed: [],
        status: DEFAULT_STATUS,
        taken: [],
      },
    ],
    [
      {
        id: id4,
        modes: [modes.ANNUAL],
        name: 'Subject 4',
        passed: [],
        status: DEFAULT_STATUS,
        taken: [],
      },
    ],
  ],
};
const contextPlanValue: PlanContextProps = {
  contextPlan,
  updateMode: () => {},
  updateStatuses: () => {},
};

export {
  contextPlan,
  contextPlanValue,
  plan1,
  plan2,
  planId1,
  planId2,
  subject,
};
