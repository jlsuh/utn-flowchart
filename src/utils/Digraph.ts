import { modes, options, statuses } from "../data";

export class Digraph {
  #allSubjects;
  #contextSubjects;
  #digraph;
  #subjectsByLevel;

  constructor(contextSubjects, subjectsByLevel) {
    this.#allSubjects = subjectsByLevel.flat();
    this.#contextSubjects = contextSubjects;
    this.#digraph = "";
    this.#subjectsByLevel = subjectsByLevel;
  }

  generate() {
    this.#appendDigraph();
    this.#appendDigraphOptions();
    this.#appendTransitions();
    this.#appendClosing();
    return this;
  }

  toString() {
    return this.#digraph;
  }

  #filterNonPassedSubjects(subjects) {
    return subjects.filter(
      (subject) =>
        this.#contextSubjects[subject.id].status.name !== statuses.PASSED.name,
    );
  }

  #findSubjectById = (target) => {
    return this.#allSubjects.find((subject) => subject.id === target);
  };

  #mapToSubjects(subjectsIds) {
    return subjectsIds.map((id) => this.#findSubjectById(id));
  }

  #getJoinedOptions(options) {
    return `[${options.join("")}]`;
  }

  #appendString(string) {
    this.#digraph += string;
  }

  #appendOpening() {
    this.#appendString("{");
  }

  #appendClosing() {
    this.#appendString("}");
  }

  #appendDigraph() {
    this.#appendString("digraph");
    this.#appendOpening();
  }

  #appendDigraphOptions() {
    this.#appendString(`${options.globalDigraph}`);
  }

  #appendSubjectNames(names) {
    names.forEach((name) => {
      this.#appendString(`"${name}"`);
    });
  }

  #appendDependenciesNames(dependencies) {
    this.#appendSubjectNames(dependencies.map((subject) => subject.name));
  }

  #appendDependenciesWithOptions(subject, dependencies, options) {
    this.#appendOpening();
    this.#appendDependenciesNames(dependencies);
    this.#appendClosing();
    this.#appendString("->");
    this.#appendSubjectNames([subject.name]);
    this.#appendString(this.#getJoinedOptions(options));
  }

  #appendSameRank(levelSubjects) {
    if (levelSubjects.length > 1) {
      this.#appendOpening();
      this.#appendString("rank=same");
      this.#appendOpening();
      const subjectNames = levelSubjects.map((subject) => subject.name);
      this.#appendSubjectNames(subjectNames);
      this.#appendClosing();
      this.#appendClosing();
    }
  }

  #appendTakenDependencies(subject) {
    const takenIds = subject.taken;
    if (takenIds) {
      const takenSubjects = this.#mapToSubjects(takenIds);
      this.#appendDependenciesWithOptions(
        subject,
        this.#filterNonPassedSubjects(takenSubjects),
        [`${options.globalArrowSize}`, `${options.takenTransitionEdgeStyle}`],
      );
    }
  }

  #appendPassedDependencies(subject) {
    const passedIds = subject.passed;
    if (passedIds) {
      const passedSubjects = this.#mapToSubjects(passedIds);
      this.#appendDependenciesWithOptions(
        subject,
        this.#filterNonPassedSubjects(passedSubjects),
        [`${options.globalArrowSize}`],
      );
    }
  }

  #appendNodeOptions(name, id) {
    this.#appendSubjectNames([name]);
    const { status, mode } = this.#contextSubjects[id];
    const nodeOptions = [`style="filled"fillcolor="${status.color}"`];
    if (mode === modes.ANNUAL) {
      nodeOptions.push(`${options.annualSubject}`);
    }
    this.#appendString(this.#getJoinedOptions(nodeOptions));
  }

  #appendDependencies(nonPassedLevelSubjects) {
    nonPassedLevelSubjects.forEach((nonPassedSubject) => {
      this.#appendNodeOptions(nonPassedSubject.name, nonPassedSubject.id);
      this.#appendTakenDependencies(nonPassedSubject);
      this.#appendPassedDependencies(nonPassedSubject);
    });
  }

  #appendNonPassedSubjects(levelSubjects) {
    const nonPassedLevelSubjects = this.#filterNonPassedSubjects(levelSubjects);
    this.#appendDependencies(nonPassedLevelSubjects);
    this.#appendSameRank(nonPassedLevelSubjects);
  }

  #appendTransitions() {
    this.#subjectsByLevel.forEach((levelSubjects) => {
      this.#appendNonPassedSubjects(levelSubjects);
    });
  }
}
