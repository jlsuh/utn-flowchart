import { ReactNode, useReducer } from "react";
import { useLocation } from "react-router-dom";
import { PlanContext } from ".";
import { plans, statuses } from "../data";
import { DataPlan, Plan, Status, Subject } from "../types/types";
import { planReducer } from "./planReducer";
import { planTypes } from "./planTypes";

const DEFAULT_PLAN = plans[0];
const SUBJECTS_KEY = "subjects";

const getFlattenedPlan = (plan: DataPlan) => {
  const flattenedSubjects = Object.values(plan.subjects)
    .flat()
    .reduce(
      (acc, subject: Subject) => ({
        ...acc,
        [subject.id]: {
          modes: subject.modes,
          status: statuses.PENDING,
        },
      }),
      {},
    );
  return {
    branch: plan.branch,
    id: plan.id,
    subjects: flattenedSubjects,
  };
};

const initializer = (initialArg: Plan) => {
  const subjects = JSON.parse(localStorage.getItem(SUBJECTS_KEY)!);
  if (subjects) return subjects;
  localStorage.setItem(SUBJECTS_KEY, JSON.stringify(initialArg));
  return initialArg;
};

export const PlanProvider = ({ children }: { children: ReactNode }) => {
  const location = useLocation();
  const [contextPlan, dispatch] = useReducer(
    planReducer,
    getFlattenedPlan(DEFAULT_PLAN),
    initializer,
  );
  const currentPlan = plans.find(
    (plan) => plan.id === location.pathname.slice(1),
  );

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

  if (!!currentPlan && currentPlan.id !== contextPlan.id) {
    const newPlan = getFlattenedPlan(currentPlan);
    updatePlan(newPlan);
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
      newSubjects[subject.id] = {
        ...newSubjects[subject.id],
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
