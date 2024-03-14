import { useContext } from 'react';
import { PlanContext } from '../context';
import type { PlanContextProps } from '../types/types';
import { Digraph, findPlanById } from '../utils';

export const useDigraph = () => {
  const { contextPlan } = useContext<PlanContextProps>(PlanContext);
  const plan = findPlanById(contextPlan.id);

  const composeDigraph = () => {
    const subjectsByLevel = plan.subjects;
    const contextSubjects = contextPlan.subjects;
    return new Digraph(contextSubjects, subjectsByLevel).generate().toString();
  };

  return { composeDigraph };
};
