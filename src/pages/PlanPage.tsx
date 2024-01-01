import { useContext, useEffect } from "react";
import { PlanContext } from "../context";
import { PlanLayout } from "../layout";
import { Plan, PlanContextProps } from "../types/types";
import { PlanView } from "../views";

export const PlanPage = ({ plan }: { plan: Plan }) => {
  const { contextPlan, setContextPlan } =
    useContext<PlanContextProps>(PlanContext);

  useEffect(() => {
    if (contextPlan.id !== plan.id) setContextPlan(plan);
  }, [contextPlan.id, plan, setContextPlan]);

  return (
    <PlanLayout>
      <PlanView />
    </PlanLayout>
  );
};
