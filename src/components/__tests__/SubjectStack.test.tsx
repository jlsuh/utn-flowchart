import { SubjectStack } from '@/components';
import { PlanContext } from '@/context';
import { statuses } from '@/data';
import * as utils from '@/utils';
import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';
import { contextPlanValue, plan1 } from './fixture';

describe(`<${SubjectStack.name} /> Tests`, () => {
  const buttonRole = 'button';
  const headingRole = 'heading';

  vi.spyOn(utils, 'findPlanById').mockReturnValue(plan1);

  it('should render stack with plan subjects', () => {
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

  it('should render all status markers', () => {
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

  it('should invoke updateSubject on status marker click', async () => {
    const mockedUpdateStatuses = vi.fn();
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
