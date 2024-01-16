import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import { describe, expect, it, vi } from "vitest";
import { PlanContext } from "../../context";
import { PlanSelect } from "../PlanSelect";
import { contextPlanValue, plan1, plan2, planId1, planId2 } from "./fixture";

const mockedUseNavigate = vi.fn();

vi.mock("react-router-dom", async () => {
  const actual = await vi.importActual("react-router-dom");
  return {
    ...actual,
    useNavigate: () => mockedUseNavigate,
  };
});

describe(`<${PlanSelect.name} /> Tests`, () => {
  const comboboxRole = "combobox";
  const optionRole = "option";

  it("should navigate on select change", async () => {
    const user = userEvent.setup();
    render(
      <MemoryRouter initialEntries={[`/${planId1}`]}>
        <PlanContext.Provider value={contextPlanValue}>
          <PlanSelect availablePlans={[plan1, plan2]} />
        </PlanContext.Provider>
      </MemoryRouter>,
    );
    const button = screen.getByRole(comboboxRole);
    await user.click(button);
    const menuItems = screen.getAllByRole(optionRole);
    await user.click(menuItems[1]);
    expect(mockedUseNavigate).toHaveBeenCalledWith(`/${planId2}`, {
      replace: true,
    });
  });
});
