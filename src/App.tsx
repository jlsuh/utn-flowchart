import { PlanProvider } from '@/context';
import { AppTheme } from '@/theme';
import AppRouter from './AppRouter';

function App() {
  return (
    <AppTheme>
      <PlanProvider>
        <AppRouter />
      </PlanProvider>
    </AppTheme>
  );
}

export default App;
