import { PlanContext } from '@/context';
import { Digraph, findPlanById } from '@/utils';
import { use } from 'react';

function useDigraph() {
  const { contextPlan } = use(PlanContext);
  const plan = findPlanById(contextPlan.id);

  function composeDigraph() {
    const subjectsByLevel = plan.subjects;
    const contextSubjects = contextPlan.subjects;
    return new Digraph(contextSubjects, subjectsByLevel).generate().toString();
  }

  return { composeDigraph };
}

export default useDigraph;
