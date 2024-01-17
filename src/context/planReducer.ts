import { Plan } from "../types/types";
import { planTypes } from "./planTypes";

interface PlanAction {
  readonly type: string;
  readonly payload: {
    readonly newPlan: Plan;
  };
}

export const planReducer = (state: Plan, action: PlanAction) => {
  switch (action.type) {
    case planTypes.updatePlan:
      return action.payload.newPlan;
    default:
      return state;
  }
};
