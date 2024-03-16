import { ExportSVGButton, ShowDigraphButton, SubjectStack } from '@/components';
import { Box, Grid } from '@mui/material';

function PlanView() {
  return (
    <Box sx={{ m: 4 }}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-end',
          mb: 2.5,
        }}
      >
        <Grid
          container
          spacing={1.5}
          sx={{ justifyContent: { xs: 'center', sm: 'end' }, my: 1 }}
        >
          <Grid item>
            <ShowDigraphButton />
          </Grid>
          <Grid item>
            <ExportSVGButton />
          </Grid>
        </Grid>
      </Box>
      <SubjectStack />
    </Box>
  );
}

export default PlanView;
