import { Box, Grid } from '@mui/material';
import { ExportSVGButton, ShowDigraphButton, SubjectStack } from '@/components';

function PlanView() {
  return (
    <Box sx={{ m: 4, mt: 0 }}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: { xs: 'center', sm: 'end' },
          py: 3.5,
        }}
      >
        <Grid container spacing={1.5} sx={{ justifyContent: { xs: 'center' } }}>
          <Grid>
            <ShowDigraphButton />
          </Grid>
          <Grid>
            <ExportSVGButton />
          </Grid>
        </Grid>
      </Box>
      <SubjectStack />
    </Box>
  );
}

export default PlanView;
