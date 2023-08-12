import { plans } from "../data";

export const findPlanById = (id) => {
  return plans.find((plan) => plan.id === id);
};
