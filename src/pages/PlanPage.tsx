import { useContext, useEffect, useState } from "react";
import { PlanContext } from "../context";
import { PlanLayout } from "../layout";
import { Plan, PlanContextProps } from "../types/types";
import { PlanView } from "../views";

export const PlanPage = ({ plan }: { plan: Plan }) => {
  const [isReady, setIsReady] = useState(false);
  const { contextPlan, setContextPlan } =
    useContext<PlanContextProps>(PlanContext);

  useEffect(() => {
    if (contextPlan.id !== plan.id) {
      setContextPlan(plan);
    }
    setIsReady(true);
  }, [contextPlan.id, plan, setContextPlan]);

  return <PlanLayout>{isReady && <PlanView />}</PlanLayout>;
};
