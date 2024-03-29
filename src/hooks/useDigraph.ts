import { PlanContext } from '@/context';
import type { PlanContextProps } from '@/types';
import { Digraph, findPlanById } from '@/utils';
import { useContext } from 'react';

function useDigraph() {
  const { contextPlan } = useContext<PlanContextProps>(PlanContext);
  const plan = findPlanById(contextPlan.id);

  function composeDigraph() {
    const subjectsByLevel = plan.subjects;
    const contextSubjects = contextPlan.subjects;
    return new Digraph(contextSubjects, subjectsByLevel).generate().toString();
  }

  return { composeDigraph };
}

export default useDigraph;
