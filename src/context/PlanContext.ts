import { createContext } from 'react';
import type { PlanContextProps } from '@/types';

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
