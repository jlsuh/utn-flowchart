import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { Subject } from "..";
import { PlanContext } from "../../context/PlanContext";
import { modes, statuses } from "../../data/constants";
import { contextPlanValue, subject } from "./fixture";

describe(`<${Subject.name} /> Tests`, () => {
  const comboBoxRole = "combobox";
  const optionRole = "option";
  const radioGroupRole = "radiogroup";
  const radioRole = "radio";

  it("should render card with subject name", () => {
    render(
      <PlanContext.Provider value={contextPlanValue}>
        <Subject subject={subject} />
      </PlanContext.Provider>,
    );
    const cardTitle = screen.getByText(subject.name);
    expect(cardTitle).toBeTruthy();
  });

  it("should render card with modes combobox", () => {
    render(
      <PlanContext.Provider value={contextPlanValue}>
        <Subject subject={subject} />
      </PlanContext.Provider>,
    );
    const options = screen.getAllByRole(optionRole);
    expect(options.length).toBe(Object.keys(modes).length);
  });

  it("should select first mode as default", () => {
    render(
      <PlanContext.Provider value={contextPlanValue}>
        <Subject subject={subject} />
      </PlanContext.Provider>,
    );
    const combobox = screen.getByRole(comboBoxRole) as HTMLInputElement;
    expect(combobox.value).toBe(JSON.stringify(modes.ANNUAL));
  });

  it("should invoke updateMode on select input change", () => {
    const mockedUpdateMode = vi.fn();
    render(
      <PlanContext.Provider
        value={{
          ...contextPlanValue,
          updateMode: mockedUpdateMode,
        }}
      >
        <Subject subject={subject} />
      </PlanContext.Provider>,
    );
    const combobox = screen.getAllByRole(comboBoxRole)[0];
    fireEvent.change(combobox, {
      target: { value: JSON.stringify(modes.QUADRIMESTRAL) },
    });
    expect(mockedUpdateMode).toHaveBeenCalledWith(
      subject.id,
      modes.QUADRIMESTRAL,
    );
  });

  it("should render card with statuses radio group", () => {
    render(
      <PlanContext.Provider value={contextPlanValue}>
        <Subject subject={subject} />
      </PlanContext.Provider>,
    );
    const radioGroup = screen.getByRole(radioGroupRole);
    expect(radioGroup.childElementCount).toBe(Object.values(statuses).length);
  });

  it("should check first status as default", () => {
    render(
      <PlanContext.Provider value={contextPlanValue}>
        <Subject subject={subject} />
      </PlanContext.Provider>,
    );
    const inputs = screen.getAllByRole(radioRole) as HTMLInputElement[];
    expect(inputs[0].checked).toBeTruthy();
  });

  it("should invoke updateStatuses on radio group change", () => {
    const mockedUpdateStatuses = vi.fn();
    render(
      <PlanContext.Provider
        value={{
          ...contextPlanValue,
          updateStatuses: mockedUpdateStatuses,
        }}
      >
        <Subject subject={subject} />
      </PlanContext.Provider>,
    );
    const inputs = screen.getAllByRole(radioRole);
    fireEvent.click(inputs[1]);
    expect(mockedUpdateStatuses).toHaveBeenCalledWith(
      [subject],
      statuses.IN_PROGRESS,
    );
  });
});
