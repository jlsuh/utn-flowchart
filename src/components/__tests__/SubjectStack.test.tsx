import { render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import { Mock, beforeEach, describe, expect, it, vi } from "vitest";
import { SubjectStack } from "..";
import { PlanContext } from "../../context/PlanContext";
import { statuses } from "../../data/constants";
import { findPlanById } from "../../utils";
import { contextPlanValue, plan1 } from "./fixture";

vi.mock("../../../src/utils/findPlanById", () => ({
  findPlanById: vi.fn(),
}));

describe(`<${SubjectStack.name} /> Tests`, () => {
  const buttonRole = "button";
  const headingRole = "heading";

  const mockedUpdateStatuses = vi.fn();

  beforeEach(() => {
    vi.clearAllMocks();
    (findPlanById as Mock).mockImplementation(() => plan1);
  });

  it("should render stack with plan subjects", () => {
    render(
      <PlanContext.Provider value={contextPlanValue}>
        <SubjectStack />
      </PlanContext.Provider>,
    );
    const subjects = screen.getAllByRole(headingRole, {
      level: 4,
    });
    expect(subjects.length).toBe(plan1.subjects.flat().length);
  });

  it("should render all status markers", () => {
    render(
      <PlanContext.Provider value={contextPlanValue}>
        <SubjectStack />
      </PlanContext.Provider>,
    );
    const statusMarkers = screen.getAllByRole(buttonRole);
    expect(statusMarkers.length).toBe(
      plan1.subjects.length * Object.values(statuses).length,
    );
  });

  it("should invoke updateSubject on status marker click", async () => {
    const user = userEvent.setup();
    render(
      <PlanContext.Provider
        value={{
          ...contextPlanValue,
          updateStatuses: mockedUpdateStatuses,
        }}
      >
        <SubjectStack />
      </PlanContext.Provider>,
    );
    const statusMarkers = screen.getAllByRole(buttonRole);
    await user.click(statusMarkers[3]);
    expect(mockedUpdateStatuses).toHaveBeenCalledWith(
      plan1.subjects[0],
      statuses.PASSED,
    );
  });
});
