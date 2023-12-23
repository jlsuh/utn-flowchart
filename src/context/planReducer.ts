import { Plan } from "../types";
import { planTypes } from "./planTypes";

interface PlanAction {
  type: string;
  payload: {
    newPlan: Plan;
  };
}

export const planReducer = (state = {} as Plan, action: PlanAction): Plan => {
  switch (action.type) {
    case planTypes.updatePlan:
      return action.payload.newPlan;
    default:
      return state;
  }
};
