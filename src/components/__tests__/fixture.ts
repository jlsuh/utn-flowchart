import { modes, statuses } from "../../data";
import { DataPlan, Plan, PlanContextProps } from "../../types/types";

const id1 = "subject-1";
const id2 = "subject-2";
const id3 = "subject-3";
const id4 = "subject-4";
const planId1 = "plan-1";
const planId2 = "plan-2";
const subjectName1 = "Subject 1";
const subjectName2 = "Subject 2";

const contextPlan: Plan = {
  id: planId1,
  branch: "planBranch-1",
  subjects: {
    [id1]: {
      id: id1,
      modes: [modes.ANNUAL],
      name: subjectName1,
      passed: [],
      status: statuses.PENDING,
      taken: [],
    },
    [id2]: {
      id: id2,
      modes: [modes.ANNUAL],
      name: subjectName2,
      passed: [],
      status: statuses.PENDING,
      taken: [],
    },
  },
};
const subject = {
  id: id1,
  modes: [modes.ANNUAL, modes.QUADRIMESTRAL],
  name: subjectName1,
  passed: [],
  status: statuses.PENDING,
  taken: [],
};
const plan1: DataPlan = {
  branch: "planBranch-1",
  id: planId1,
  subjects: [
    [
      {
        id: id1,
        modes: [modes.ANNUAL, modes.QUADRIMESTRAL],
        name: subjectName1,
        taken: [],
      },
    ],
    [
      {
        id: id2,
        modes: [modes.ANNUAL],
        name: "Subject 2",
        taken: [],
      },
    ],
  ],
};
const plan2: DataPlan = {
  branch: "planBranch-2",
  id: planId2,
  subjects: [
    [
      {
        id: id3,
        modes: [modes.ANNUAL, modes.QUADRIMESTRAL],
        name: "Subject 3",
        taken: [],
      },
    ],
    [
      {
        id: id4,
        modes: [modes.ANNUAL],
        name: "Subject 4",
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
