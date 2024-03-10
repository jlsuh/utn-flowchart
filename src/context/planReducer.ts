import { ContextPlan } from '../types/types';
import { planTypes } from './planTypes';

interface PlanAction {
  readonly type: string;
  readonly payload: {
    readonly newPlan: ContextPlan;
  };
}

export const planReducer = (state: ContextPlan, action: PlanAction) => {
  switch (action.type) {
    case planTypes.updatePlan:
      return action.payload.newPlan;
    default:
      return state;
  }
};
