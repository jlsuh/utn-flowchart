import { modes, options, statuses } from '@/data';
import type { SubjectProps } from '@/types';

class Digraph {
  private readonly allSubjects: ReadonlyArray<SubjectProps>;
  private readonly contextSubjects: Record<string, SubjectProps>;
  private readonly subjectsByLevel: ReadonlyArray<ReadonlyArray<SubjectProps>>;
  private digraph: string;

  constructor(
    contextSubjects: Record<string, SubjectProps>,
    subjectsByLevel: ReadonlyArray<ReadonlyArray<SubjectProps>>,
  ) {
    this.allSubjects = subjectsByLevel.flat();
    this.contextSubjects = contextSubjects;
    this.subjectsByLevel = subjectsByLevel;
    this.digraph = '';
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

  private filterNonPassedSubjects(subjects: ReadonlyArray<SubjectProps>) {
    return subjects.filter(
      (subject) =>
        this.contextSubjects[subject.id].status.name !== statuses.PASSED.name,
    );
  }

  private findSubjectById(targetSubjectId: string) {
    return (
      this.allSubjects.find((subject) => subject.id === targetSubjectId) ??
      (() => {
        throw new Error(`Subject with id "${targetSubjectId}" not found`);
      })()
    );
  }

  private mapToSubjects(subjectsIds: ReadonlyArray<string>) {
    return subjectsIds.map((id) => this.findSubjectById(id));
  }

  private getJoinedOptions(options: ReadonlyArray<string>) {
    return `[${options.join('')}]`;
  }

  private appendString(string: string) {
    this.digraph += string;
  }

  private appendOpening() {
    this.appendString('{');
  }

  private appendClosing() {
    this.appendString('}');
  }

  private appendDigraph() {
    this.appendString('digraph');
    this.appendOpening();
  }

  private appendDigraphOptions() {
    this.appendString(`${options.globalDigraph}`);
  }

  private appendSubjectNames(names: ReadonlyArray<string>) {
    for (const name of names) {
      this.appendString(`"${name}"`);
    }
  }

  private appendDependenciesNames(dependencies: ReadonlyArray<SubjectProps>) {
    this.appendSubjectNames(dependencies.map((subject) => subject.name));
  }

  private appendDependenciesWithOptions(
    subject: SubjectProps,
    dependencies: ReadonlyArray<SubjectProps>,
    options: ReadonlyArray<string>,
  ) {
    this.appendOpening();
    this.appendDependenciesNames(dependencies);
    this.appendClosing();
    this.appendString('->');
    this.appendSubjectNames([subject.name]);
    this.appendString(this.getJoinedOptions(options));
  }

  private appendSameRank(levelSubjects: ReadonlyArray<SubjectProps>) {
    if (levelSubjects.length > 1) {
      this.appendOpening();
      this.appendString('rank=same');
      this.appendOpening();
      const subjectNames = levelSubjects.map((subject) => subject.name);
      this.appendSubjectNames(subjectNames);
      this.appendClosing();
      this.appendClosing();
    }
  }

  private appendTakenDependencies(subject: SubjectProps) {
    const takenIds = subject.taken;
    if (takenIds.length > 0) {
      const takenSubjects = this.mapToSubjects(takenIds);
      this.appendDependenciesWithOptions(
        subject,
        this.filterNonPassedSubjects(takenSubjects),
        [`${options.globalArrowSize}`, `${options.takenTransitionEdgeStyle}`],
      );
    }
  }

  private appendPassedDependencies(subject: SubjectProps) {
    const passedIds = subject.passed;
    if (passedIds.length > 0) {
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
    const nodeOptions = [`style="filled"fillcolor="${status.color}"`];
    if (subjectModes[0] === modes.ANNUAL) {
      nodeOptions.push(`${options.annualSubject}`);
    }
    this.appendString(this.getJoinedOptions(nodeOptions));
  }

  private appendDependencies(
    nonPassedLevelSubjects: ReadonlyArray<SubjectProps>,
  ) {
    for (const nonPassedSubject of nonPassedLevelSubjects) {
      this.appendNodeOptions(nonPassedSubject.name, nonPassedSubject.id);
      this.appendTakenDependencies(nonPassedSubject);
      this.appendPassedDependencies(nonPassedSubject);
    }
  }

  private appendNonPassedSubjects(levelSubjects: ReadonlyArray<SubjectProps>) {
    const nonPassedLevelSubjects = this.filterNonPassedSubjects(levelSubjects);
    this.appendDependencies(nonPassedLevelSubjects);
    this.appendSameRank(nonPassedLevelSubjects);
  }

  private appendTransitions() {
    for (const levelSubjects of this.subjectsByLevel) {
      this.appendNonPassedSubjects(levelSubjects);
    }
  }
}

export default Digraph;
