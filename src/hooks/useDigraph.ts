import { useContext } from "react";
import { PlanContext } from "../context";
import { PlanContextProps } from "../types/types";
import { Digraph, findPlanById } from "../utils";

export const useDigraph = () => {
  const { contextPlan } = useContext<PlanContextProps>(PlanContext);
  const plan =
    findPlanById(contextPlan.id) ??
    (() => {
      throw new Error(`Plan with id "${contextPlan.id}" not found`);
    })();

  const composeDigraph = () => {
    const subjectsByLevel = plan.subjects;
    const contextSubjects = contextPlan.subjects;
    return new Digraph(contextSubjects, subjectsByLevel).generate().toString();
  };

  return { composeDigraph };
};
