interface Plan<T> {
  readonly id: string;
  readonly branch: string;
  readonly subjects: T;
}

interface PlanContextProps {
  readonly contextPlan: ContextPlan;
  readonly updateMode: (subjectId: string, newMode: string) => void;
  readonly updateStatuses: (
    subjects: ReadonlyArray<Subject>,
    newStatus: Status,
  ) => void;
}

interface Status {
  readonly color: string;
  readonly name: string;
}

interface Subject {
  readonly id: string;
  readonly modes: ReadonlyArray<string>;
  readonly name: string;
  readonly passed: ReadonlyArray<string>;
  readonly status: Status;
  readonly taken: ReadonlyArray<string>;
}

type ContextPlan = Plan<Record<string, Subject>>;

type DataPlan = Plan<ReadonlyArray<ReadonlyArray<Subject>>>;

export type { ContextPlan, DataPlan, PlanContextProps, Status, Subject };
