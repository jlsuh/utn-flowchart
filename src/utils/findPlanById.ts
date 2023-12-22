import { plans } from "../data";

export const findPlanById = (id: string) => {
  return plans.find((plan) => plan.id === id);
};
