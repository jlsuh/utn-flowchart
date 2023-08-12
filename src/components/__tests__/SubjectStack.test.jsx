import { fireEvent, render, screen } from "@testing-library/react";
import { SubjectStack } from "..";
import { PlanContext } from "../../context/PlanContext";
import { statuses } from "../../data/constants";
import { findPlanById } from "../../utils";
import { contextPlan, plan1 } from "./fixture";

jest.mock("../../../src/utils/findPlanById", () => ({
  findPlanById: jest.fn(),
}));

describe(`<${SubjectStack.name} /> Tests`, () => {
  const buttonRole = "button";
  const headingRole = "heading";

  beforeEach(() => {
    jest.clearAllMocks();
    findPlanById.mockImplementation(() => plan1);
  });

  it("should render stack with plan subjects", () => {
    render(
      <PlanContext.Provider value={{ contextPlan }}>
        <SubjectStack />
      </PlanContext.Provider>
    );
    const subjects = screen.getAllByRole(headingRole, {
      level: 4,
    });
    expect(subjects.length).toBe(plan1.subjects.flat().length);
  });

  it("should render all status markers", () => {
    render(
      <PlanContext.Provider value={{ contextPlan }}>
        <SubjectStack />
      </PlanContext.Provider>
    );
    const statusMarkers = screen.getAllByRole(buttonRole);
    expect(statusMarkers.length).toBe(
      plan1.subjects.length * Object.values(statuses).length
    );
  });

  it("should invoke updateSubject on status marker click", () => {
    const mockedUpdateStatuses = jest.fn();
    render(
      <PlanContext.Provider
        value={{
          contextPlan,
          updateStatuses: mockedUpdateStatuses,
        }}
      >
        <SubjectStack />
      </PlanContext.Provider>
    );
    const statusMarkers = screen.getAllByRole(buttonRole);
    fireEvent.click(statusMarkers[3]);
    expect(mockedUpdateStatuses).toHaveBeenCalledWith(
      plan1.subjects[0],
      statuses.PASSED
    );
  });
});
