import { useContext, useEffect, useState } from "react";
import { PlanContext } from "../context";
import { PlanLayout } from "../layout";
import { PlanView } from "../views";

export const PlanPage = ({ plan }) => {
  const [isReady, setIsReady] = useState(false);
  const { contextPlan, setContextPlan } = useContext(PlanContext);

  useEffect(() => {
    if (contextPlan.id !== plan.id) {
      setContextPlan(plan);
    }
    setIsReady(true);
  }, []);

  return <PlanLayout>{isReady && <PlanView />}</PlanLayout>;
};
