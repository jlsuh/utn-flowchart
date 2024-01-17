import { modes, options, statuses } from "../data";
import { Subject } from "../types/types";

export class Digraph {
  private readonly allSubjects: Subject[];
  private readonly contextSubjects: Record<string, Subject>;
  private readonly subjectsByLevel: Subject[][];
  private digraph: string;

  constructor(
    contextSubjects: Record<string, Subject>,
    subjectsByLevel: Subject[][],
  ) {
    this.allSubjects = subjectsByLevel.flat();
    this.contextSubjects = contextSubjects;
    this.subjectsByLevel = subjectsByLevel;
    this.digraph = "";
  }

  public generate() {
    this.appendDigraph();
    this.appendDigraphOptions();
    this.appendTransitions();
    this.appendClosing();
    return this;
  }

  public toString() {
    return this.digraph;
  }

  private filterNonPassedSubjects(subjects: Subject[]) {
    return subjects.filter(
      (subject) =>
        this.contextSubjects[subject.id].status?.name !== statuses.PASSED.name,
    );
  }

  private findSubjectById = (target: string) => {
    return this.allSubjects.find((subject) => subject.id === target)!;
  };

  private mapToSubjects(subjectsIds: string[]) {
    return subjectsIds.map((id) => this.findSubjectById(id));
  }

  private getJoinedOptions(options: string[]) {
    return `[${options.join("")}]`;
  }

  private appendString(string: string) {
    this.digraph += string;
  }

  private appendOpening() {
    this.appendString("{");
  }

  private appendClosing() {
    this.appendString("}");
  }

  private appendDigraph() {
    this.appendString("digraph");
    this.appendOpening();
  }

  private appendDigraphOptions() {
    this.appendString(`${options.globalDigraph}`);
  }

  private appendSubjectNames(names: string[]) {
    names.forEach((name) => {
      this.appendString(`"${name}"`);
    });
  }

  private appendDependenciesNames(dependencies: Subject[]) {
    this.appendSubjectNames(dependencies.map((subject) => subject.name));
  }

  private appendDependenciesWithOptions(
    subject: Subject,
    dependencies: Subject[],
    options: string[],
  ) {
    this.appendOpening();
    this.appendDependenciesNames(dependencies);
    this.appendClosing();
    this.appendString("->");
    this.appendSubjectNames([subject.name]);
    this.appendString(this.getJoinedOptions(options));
  }

  private appendSameRank(levelSubjects: Subject[]) {
    if (levelSubjects.length > 1) {
      this.appendOpening();
      this.appendString("rank=same");
      this.appendOpening();
      const subjectNames = levelSubjects.map((subject) => subject.name);
      this.appendSubjectNames(subjectNames);
      this.appendClosing();
      this.appendClosing();
    }
  }

  private appendTakenDependencies(subject: Subject) {
    const takenIds = subject.taken;
    if (takenIds) {
      const takenSubjects = this.mapToSubjects(takenIds);
      this.appendDependenciesWithOptions(
        subject,
        this.filterNonPassedSubjects(takenSubjects),
        [`${options.globalArrowSize}`, `${options.takenTransitionEdgeStyle}`],
      );
    }
  }

  private appendPassedDependencies(subject: Subject) {
    const passedIds = subject.passed;
    if (passedIds) {
      const passedSubjects = this.mapToSubjects(passedIds);
      this.appendDependenciesWithOptions(
        subject,
        this.filterNonPassedSubjects(passedSubjects),
        [`${options.globalArrowSize}`],
      );
    }
  }

  private appendNodeOptions(name: string, id: string) {
    this.appendSubjectNames([name]);
    const { status, modes: subjectModes } = this.contextSubjects[id];
    const nodeOptions = [`style="filled"fillcolor="${status?.color}"`];
    if (subjectModes[0] === modes.ANNUAL) {
      nodeOptions.push(`${options.annualSubject}`);
    }
    this.appendString(this.getJoinedOptions(nodeOptions));
  }

  private appendDependencies(nonPassedLevelSubjects: Subject[]) {
    nonPassedLevelSubjects.forEach((nonPassedSubject) => {
      this.appendNodeOptions(nonPassedSubject.name, nonPassedSubject.id);
      this.appendTakenDependencies(nonPassedSubject);
      this.appendPassedDependencies(nonPassedSubject);
    });
  }

  private appendNonPassedSubjects(levelSubjects: Subject[]) {
    const nonPassedLevelSubjects = this.filterNonPassedSubjects(levelSubjects);
    this.appendDependencies(nonPassedLevelSubjects);
    this.appendSameRank(nonPassedLevelSubjects);
  }

  private appendTransitions() {
    this.subjectsByLevel.forEach((levelSubjects) => {
      this.appendNonPassedSubjects(levelSubjects);
    });
  }
}
