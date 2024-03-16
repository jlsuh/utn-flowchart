import type { PlanContextProps } from '@/types';
import { createContext } from 'react';

const PlanContext = createContext<PlanContextProps>({
  contextPlan: {
    id: '',
    branch: '',
    subjects: {},
  },
  updateMode: () => {},
  updateStatuses: () => {},
});

export default PlanContext;
