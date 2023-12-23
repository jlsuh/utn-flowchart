import { createContext } from "react";
import { Plan, Status, Subject } from "../types/types";

export interface PlanContextProps {
  contextPlan: Plan;
  setContextPlan: (plan: Plan) => void;
  updateMode: (subjectId: string, newMode: string) => void;
  updateStatuses: (subjects: Subject[], newStatus: Status) => void;
}

export const PlanContext = createContext<PlanContextProps>({
  contextPlan: {} as Plan,
  setContextPlan: () => {},
  updateMode: () => {},
  updateStatuses: () => {},
});
