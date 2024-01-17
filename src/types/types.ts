export interface Status {
  readonly color: string;
  readonly name: string;
}

export interface Subject {
  readonly id: string;
  readonly modes: string[];
  readonly name: string;
  readonly passed?: string[];
  readonly status?: Status;
  readonly taken?: string[];
}

export interface Plan {
  readonly id: string;
  readonly branch: string;
  readonly subjects: Record<string, Subject>;
}

export interface DataPlan extends Omit<Plan, "subjects"> {
  readonly subjects: Subject[][];
}

export interface PlanContextProps {
  readonly contextPlan: Plan;
  readonly updateMode: (subjectId: string, newMode: string) => void;
  readonly updateStatuses: (subjects: Subject[], newStatus: Status) => void;
}
