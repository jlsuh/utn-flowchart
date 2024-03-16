import { PlanContext } from '@/context';
import { plans } from '@/data';
import { PlanPage } from '@/pages';
import type { PlanContextProps } from '@/types';
import { useContext } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

function AppRouter() {
  const { contextPlan } = useContext<PlanContextProps>(PlanContext);
  const { id } = contextPlan;

  return (
    <Routes>
      {plans.map((plan) => (
        <Route key={plan.id} path={`/${plan.id}`} element={<PlanPage />} />
      ))}
      <Route path="/" element={<Navigate to={`/${id}`} />} />
      <Route path="*" element={<Navigate to={`/${id}`} />} />
    </Routes>
  );
}

export default AppRouter;
