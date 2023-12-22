export interface Status {
  color: string;
  name: string;
}

export interface Subject {
  id?: string;
  modes?: string[];
  mode?: string;
  name?: string;
  status: Status;
  taken?: string[];
  passed?: string[];
}

export interface Plan {
  id: string;
  branch: string;
  subjects: Record<string, Subject> | Subject[];
}
