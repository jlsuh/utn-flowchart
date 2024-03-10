import { ReactNode, useReducer } from 'react';
import { useLocation } from 'react-router-dom';
import { PlanContext } from '.';
import { plans } from '../data';
import { ContextPlan, DataPlan, Status, Subject } from '../types/types';
import { planReducer } from './planReducer';
import { planTypes } from './planTypes';

const DEFAULT_PLAN = plans[0];
const SUBJECTS_KEY = 'subjects';

const getFlattenedPlan = ({ id, branch, subjects }: DataPlan) => {
  const flattenedSubjects = Object.values(subjects)
    .flat()
    .reduce(
      (acc, subject) => ({
        ...acc,
        [subject.id]: {
          modes: subject.modes,
          status: subject.status,
        },
      }),
      {},
    );
  return {
    branch,
    id,
    subjects: flattenedSubjects,
  };
};

const initializer = (initialArg: ContextPlan) => {
  const subjectsJSON = localStorage.getItem(SUBJECTS_KEY);
  if (subjectsJSON === null) {
    localStorage.setItem(SUBJECTS_KEY, JSON.stringify(initialArg));
    return initialArg;
  }
  return JSON.parse(subjectsJSON);
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

  const updatePlan = (newPlan: ContextPlan) => {
    localStorage.setItem(SUBJECTS_KEY, JSON.stringify(newPlan));
    const action = {
      type: planTypes.updatePlan,
      payload: {
        newPlan,
      },
    };
    dispatch(action);
  };

  if (currentPlan && currentPlan.id !== contextPlan.id) {
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

  const updateStatuses = (
    subjects: ReadonlyArray<Subject>,
    newStatus: Status,
  ) => {
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
