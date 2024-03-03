interface Plan<T> {
  readonly id: string;
  readonly branch: string;
  readonly subjects: T;
}

export interface PlanContextProps {
  readonly contextPlan: ContextPlan;
  readonly updateMode: (subjectId: string, newMode: string) => void;
  readonly updateStatuses: (
    subjects: ReadonlyArray<Subject>,
    newStatus: Status,
  ) => void;
}

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

export type ContextPlan = Plan<Record<string, Subject>>;

export type DataPlan = Plan<ReadonlyArray<ReadonlyArray<Subject>>>;
