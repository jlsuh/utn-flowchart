import { useContext } from "react";
import { PlanContext, PlanContextProps } from "../context";
import { Subject } from "../types";
import { Digraph, findPlanById } from "../utils";

export const useDigraph = () => {
  const { contextPlan } = useContext<PlanContextProps>(PlanContext);
  const plan = findPlanById(contextPlan.id);

  const composeDigraph = () => {
    const subjectsByLevel = plan!.subjects as Subject[][];
    const contextSubjects = contextPlan.subjects;
    return new Digraph(contextSubjects, subjectsByLevel).generate().toString();
  };

  return { composeDigraph };
};
