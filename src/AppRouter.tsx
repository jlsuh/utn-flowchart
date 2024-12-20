import { PlanContext } from '@/context';
import { plans } from '@/data';
import { PlanPage } from '@/pages';
import { use } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

function AppRouter() {
  const { contextPlan } = use(PlanContext);
  const { id } = contextPlan;

  return (
    <Routes>
      {plans.map((plan) => (
        <Route element={<PlanPage />} key={plan.id} path={`/${plan.id}`} />
      ))}
      <Route element={<Navigate to={`/${id}`} />} path="/" />
      <Route element={<Navigate to={`/${id}`} />} path="*" />
    </Routes>
  );
}

export default AppRouter;
