import { CssBaseline, ThemeProvider } from '@mui/material';
import type { ReactNode } from 'react';
import { lightTheme } from './lightTheme';

export const AppTheme = ({ children }: { children: ReactNode }) => {
  return (
    <ThemeProvider theme={lightTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};
