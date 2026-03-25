import { Box, Toolbar } from '@mui/material';
import type { ReactNode } from 'react';
import { NavBar } from '@/components';

function PlanLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <NavBar />
      <Box component="main" sx={{ overflowWrap: 'anywhere' }}>
        <Toolbar disableGutters sx={{ my: { xs: 8, sm: 2 } }} />
        {children}
      </Box>
    </>
  );
}

export default PlanLayout;
