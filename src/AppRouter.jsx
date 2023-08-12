import { useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { PlanContext } from "./context";
import { plans } from "./data";
import { PlanPage } from "./pages";

export const AppRouter = () => {
  const { contextPlan } = useContext(PlanContext);

  return (
    <Routes>
      {plans.map((plan) => (
        <Route
          key={plan.id}
          path={`/${plan.id}`}
          element={<PlanPage plan={plan} />}
        />
      ))}
      <Route path="/" element={<Navigate to={`/${contextPlan.id}`} />} />
      <Route path="*" element={<Navigate to={`/${contextPlan.id}`} />} />
    </Routes>
  );
};
