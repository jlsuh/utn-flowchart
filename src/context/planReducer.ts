import type { ContextPlan } from '@/types';

const planTypes = {
  updatePlan: 'plan/update',
} as const;

interface PlanAction {
  readonly type: (typeof planTypes)[keyof typeof planTypes];
  readonly payload: {
    readonly newPlan: ContextPlan;
  };
}

const planReducer = (state: ContextPlan, action: PlanAction) => {
  switch (action.type) {
    case planTypes.updatePlan:
      return action.payload.newPlan;
    default:
      return state;
  }
};

export { planReducer, planTypes };
