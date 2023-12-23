import { createContext } from "react";
import { Plan, PlanContextProps } from "../types/types";

export const PlanContext = createContext<PlanContextProps>({
  contextPlan: {} as Plan,
  setContextPlan: () => {},
  updateMode: () => {},
  updateStatuses: () => {},
});
