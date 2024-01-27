export interface Status {
  readonly color: string;
  readonly name: string;
}

export interface Subject {
  readonly id: string;
  readonly modes: ReadonlyArray<string>;
  readonly name: string;
  readonly passed: ReadonlyArray<string>;
  readonly status: Status;
  readonly taken: ReadonlyArray<string>;
}

export interface Plan {
  readonly id: string;
  readonly branch: string;
  readonly subjects: Record<string, Subject>;
}

export interface DataPlan extends Omit<Plan, "subjects"> {
  readonly subjects: ReadonlyArray<ReadonlyArray<Subject>>;
}

export interface PlanContextProps {
  readonly contextPlan: Plan;
  readonly updateMode: (subjectId: string, newMode: string) => void;
  readonly updateStatuses: (
    subjects: ReadonlyArray<Subject>,
    newStatus: Status,
  ) => void;
}
