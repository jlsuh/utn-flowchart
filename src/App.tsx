import { PlanProvider } from '@/context';
import { AppTheme } from '@/theme';
import { useEffect } from 'react';
import AppRouter from './AppRouter';
import importViz from './services/importViz';

function App() {
  useEffect(() => {
    importViz();
  }, []);

  return (
    <AppTheme>
      <PlanProvider>
        <AppRouter />
      </PlanProvider>
    </AppTheme>
  );
}

export default App;
