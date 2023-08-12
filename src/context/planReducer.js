import { planTypes } from "./planTypes";

export const planReducer = (state = {}, action) => {
  switch (action.type) {
    case planTypes.updatePlan:
      return action.payload.newPlan;
    default:
      return state;
  }
};
