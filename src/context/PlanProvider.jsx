import { useEffect, useReducer } from "react";
import { useLocation } from "react-router-dom";
import { PlanContext } from ".";
import { plans, statuses } from "../data";
import { planReducer } from "./planReducer";
import { planTypes } from "./planTypes";

const DEFAULT_PLAN = plans[0];
const SUBJECTS_KEY = "subjects";

const getInitialPlan = (plan) => {
  const allSubjects = plan.subjects.flat();
  const initialSubjects = {};
  allSubjects.forEach((subject) => {
    initialSubjects[subject.id] = {
      mode: subject.modes[0],
      status: statuses.PENDING,
    };
  });
  return {
    subjects: initialSubjects,
    id: plan.id,
  };
};

const initializer = (initialArg) => {
  const subjects = JSON.parse(localStorage.getItem(SUBJECTS_KEY));
  if (subjects) {
    return subjects;
  }
  localStorage.setItem(SUBJECTS_KEY, JSON.stringify(initialArg));
  return initialArg;
};

export const PlanProvider = ({ children }) => {
  const location = useLocation();
  const [contextPlan, dispatch] = useReducer(
    planReducer,
    getInitialPlan(DEFAULT_PLAN),
    initializer,
  );

  const setContextPlan = (plan) => {
    const newPlan = getInitialPlan(plan);
    updatePlan(newPlan);
  };

  const updateMode = (subjectId, newMode) => {
    const newSubjects = JSON.parse(JSON.stringify(contextPlan.subjects));
    newSubjects[subjectId] = {
      ...newSubjects[subjectId],
      mode: newMode,
    };
    const newPlan = {
      ...contextPlan,
      subjects: newSubjects,
    };
    updatePlan(newPlan);
  };

  const updateStatuses = (subjects, newStatus) => {
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

  const updatePlan = (newPlan) => {
    localStorage.setItem(SUBJECTS_KEY, JSON.stringify(newPlan));
    const action = {
      type: planTypes.updatePlan,
      payload: {
        newPlan,
      },
    };
    dispatch(action);
  };

  useEffect(() => {
    const plan = plans.find((plan) => plan.id === location.pathname.slice(1));
    if (!!plan && plan.id !== contextPlan.id) {
      setContextPlan(plan);
    }
  }, [location.pathname]);

  return (
    <PlanContext.Provider
      value={{
        contextPlan,
        setContextPlan,
        updateMode,
        updateStatuses,
      }}
    >
      {children}
    </PlanContext.Provider>
  );
};
