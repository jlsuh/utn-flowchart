import { CssBaseline, ThemeProvider } from "@mui/material";
import { ReactNode } from "react";
import { lightTheme } from "./lightTheme";

export const AppTheme = ({ children }: { children: ReactNode }) => {
  return (
    <ThemeProvider theme={lightTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};
