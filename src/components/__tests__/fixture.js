import { modes, statuses } from "../../data";

const id1 = "subject-1";
const id2 = "subject-2";
const id3 = "subject-3";
const id4 = "subject-4";
const planId1 = "plan-1";
const planId2 = "plan-2";
const subjectName1 = "Subject 1";

const contextPlan = {
  id: planId1,
  subjects: {
    [id1]: {
      status: statuses.PENDING,
      mode: modes.ANNUAL,
    },
    [id2]: {
      status: statuses.PENDING,
      mode: modes.ANNUAL,
    },
  },
};
const subject = {
  id: id1,
  modes: [modes.ANNUAL, modes.QUADRIMESTRAL],
  name: subjectName1,
};
const plan1 = {
  branch: "planBranch-1",
  id: planId1,
  subjects: [
    [
      {
        id: id1,
        modes: [modes.ANNUAL, modes.QUADRIMESTRAL],
        name: subjectName1,
      },
    ],
    [
      {
        id: id2,
        modes: [modes.ANNUAL],
        name: "Subject 2",
      },
    ],
  ],
};
const plan2 = {
  branch: "planBranch-2",
  id: planId2,
  subjects: [
    [
      {
        id: id3,
        modes: [modes.ANNUAL, modes.QUADRIMESTRAL],
        name: "Subject 3",
      },
    ],
    [
      {
        id: id4,
        modes: [modes.ANNUAL],
        name: "Subject 4",
      },
    ],
  ],
};

export { contextPlan, plan1, plan2, planId1, planId2, subject };

