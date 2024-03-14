import { createContext } from 'react';
import type { PlanContextProps } from '../types/types';

export const PlanContext = createContext<PlanContextProps>({
  contextPlan: {
    id: '',
    branch: '',
    subjects: {},
  },
  updateMode: () => {},
  updateStatuses: () => {},
});
