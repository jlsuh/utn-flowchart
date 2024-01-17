export interface Status {
  color: string;
  name: string;
}

export interface Subject {
  id: string;
  modes: string[];
  name: string;
  status: Status;
  taken: string[];
  passed: string[];
}

export interface Plan {
  id: string;
  branch: string;
  subjects: Record<string, Subject>;
}

export interface PlanContextProps {
  contextPlan: Plan;
  updateMode: (subjectId: string, newMode: string) => void;
  updateStatuses: (subjects: Subject[], newStatus: Status) => void;
}
