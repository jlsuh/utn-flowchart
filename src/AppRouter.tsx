import { useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { Plan } from "./common/types";
import { PlanContext, PlanContextProps } from "./context";
import { plans } from "./data";
import { PlanPage } from "./pages";

export default function AppRouter() {
  const { contextPlan } = useContext<PlanContextProps>(PlanContext);
  const { id } = contextPlan;

  return (
    <Routes>
      {plans.map((plan) => (
        <Route
          key={plan.id}
          path={`/${plan.id}`}
          element={<PlanPage plan={plan as unknown as Plan} />}
        />
      ))}
      <Route path="/" element={<Navigate to={`/${id}`} />} />
      <Route path="*" element={<Navigate to={`/${id}`} />} />
    </Routes>
  );
}
