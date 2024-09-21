import type { PlanContextProps } from '@/types';
import { createContext } from 'react';

const PlanContext = createContext<PlanContextProps>({
  contextPlan: {
    branch: '',
    id: '',
    subjects: {},
  },
  updateMode: () => {},
  updateStatuses: () => {},
});

export default PlanContext;
