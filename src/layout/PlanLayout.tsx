import { NavBar } from '@/components';
import { Box, Toolbar } from '@mui/material';
import type { ReactNode } from 'react';

function PlanLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <NavBar />
      <Box component="main" sx={{ overflowWrap: 'anywhere' }}>
        <Toolbar disableGutters sx={{ my: { xs: 8.5, sm: 0.5 } }} />
        {children}
      </Box>
    </>
  );
}

export default PlanLayout;
