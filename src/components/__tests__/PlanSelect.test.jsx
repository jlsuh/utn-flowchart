import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { PlanContext } from "../../context";
import { PlanSelect } from "../PlanSelect";
import { contextPlan, plan1, plan2, planId1, planId2 } from "./fixture";

const mockedUseNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUseNavigate,
}));

describe(`<${PlanSelect.name} /> Tests`, () => {
  const buttonRole = "button";
  const optionRole = "option";

  it("should navigate on select change", () => {
    render(
      <MemoryRouter initialEntries={[`/${planId1}`]}>
        <PlanContext.Provider
          value={{
            contextPlan,
          }}
        >
          <PlanSelect availablePlans={[plan1, plan2]} />
        </PlanContext.Provider>
      </MemoryRouter>
    );
    const button = screen.getByRole(buttonRole);
    fireEvent.mouseDown(button);
    const menuItems = screen.getAllByRole(optionRole);
    fireEvent.click(menuItems[1]);
    expect(mockedUseNavigate).toHaveBeenCalledWith(`/${planId2}`, {
      replace: true,
    });
  });
});
