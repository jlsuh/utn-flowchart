import { ReactNode, useReducer } from "react";
import { useLocation } from "react-router-dom";
import { PlanContext } from ".";
import { plans, statuses } from "../data";
import { Plan, Status, Subject } from "../types/types";
import { planReducer } from "./planReducer";
import { planTypes } from "./planTypes";

const DEFAULT_PLAN = plans[0] as unknown as Plan;
const SUBJECTS_KEY = "subjects";

const getFlattenedPlan = (plan: Plan) => {
  const initialSubjects = (plan.subjects as Subject[]).flat().reduce(
    (acc, subject: Subject) => ({
      ...acc,
      [subject.id!]: {
        modes: subject.modes,
        status: statuses.PENDING,
      },
    }),
    {},
  );
  return {
    subjects: initialSubjects,
    id: plan.id,
  };
};

const initializer = (initialArg: Plan) => {
  const subjects = JSON.parse(localStorage.getItem(SUBJECTS_KEY) as string);
  if (subjects) return subjects;
  localStorage.setItem(SUBJECTS_KEY, JSON.stringify(initialArg));
  return initialArg;
};

export const PlanProvider = ({ children }: { children: ReactNode }) => {
  const location = useLocation();
  const [contextPlan, dispatch] = useReducer(
    planReducer,
    getFlattenedPlan(DEFAULT_PLAN) as Plan,
    initializer,
  );
  const currentPlan = plans.find(
    (plan) => plan.id === location.pathname.slice(1),
  ) as unknown as Plan;

  const updatePlan = (newPlan: Plan) => {
    localStorage.setItem(SUBJECTS_KEY, JSON.stringify(newPlan));
    const action = {
      type: planTypes.updatePlan,
      payload: {
        newPlan,
      },
    };
    dispatch(action);
  };

  const setContextPlan = (plan: Plan) => {
    const newPlan = getFlattenedPlan(plan) as Plan;
    updatePlan(newPlan);
  };

  if (!!currentPlan && currentPlan.id !== contextPlan.id) {
    setContextPlan(currentPlan);
  }

  const updateMode = (subjectId: string, newMode: string) => {
    const newSubjects = JSON.parse(JSON.stringify(contextPlan.subjects));
    newSubjects[subjectId] = {
      ...newSubjects[subjectId],
      modes: [
        newMode,
        ...newSubjects[subjectId].modes.filter(
          (mode: string) => mode !== newMode,
        ),
      ],
    };
    const newPlan = {
      ...contextPlan,
      subjects: newSubjects,
    };
    updatePlan(newPlan);
  };

  const updateStatuses = (subjects: Subject[], newStatus: Status) => {
    const newSubjects = JSON.parse(JSON.stringify(contextPlan.subjects));
    subjects.forEach((subject) => {
      newSubjects[subject.id!] = {
        ...newSubjects[subject.id!],
        status: newStatus,
      };
    });
    const newPlan = {
      ...contextPlan,
      subjects: newSubjects,
    };
    updatePlan(newPlan);
  };

  return (
    <PlanContext.Provider
      value={{
        contextPlan,
        updateMode,
        updateStatuses,
      }}
    >
      {children}
    </PlanContext.Provider>
  );
};
