import { PlanSelect } from '@/components';
import GitHubIcon from '@mui/icons-material/GitHub';
import { AppBar, IconButton, Toolbar, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';

function NavBar() {
  return (
    <AppBar
      sx={{
        position: 'absolute',
        direction: { xs: 'column', sm: 'row' },
      }}
    >
      <Toolbar sx={{ m: 2 }}>
        <Grid
          container
          sx={{
            alignItems: 'center',
            flex: 'auto',
            justifyContent: { xs: 'center', sm: 'space-between' },
            rowGap: 1,
          }}
        >
          <Typography
            component="div"
            noWrap
            sx={{ userSelect: 'none', mx: 1 }}
            variant="h5"
          >
            UTN Flowchart
          </Typography>
          <PlanSelect />
          <IconButton
            aria-label="Github repository"
            href="https://github.com/jlsuh/utn-flowchart"
            rel="noopener noreferrer"
            target="_blank"
            color="inherit"
          >
            <GitHubIcon
              sx={{
                fontSize: 32,
              }}
            />
          </IconButton>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
