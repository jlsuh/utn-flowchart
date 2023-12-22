import AppRouter from "./AppRouter";
import { PlanProvider } from "./context";
import { AppTheme } from "./theme";

export default function App() {
  return (
    <AppTheme>
      <PlanProvider>
        <AppRouter />
      </PlanProvider>
    </AppTheme>
  );
}
