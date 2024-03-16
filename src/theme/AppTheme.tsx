import { CssBaseline, ThemeProvider } from '@mui/material';
import type { ReactNode } from 'react';
import lightTheme from './lightTheme';

function AppTheme({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider theme={lightTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}

export default AppTheme;
