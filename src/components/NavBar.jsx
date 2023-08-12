import GitHubIcon from "@mui/icons-material/GitHub";
import { AppBar, Grid, IconButton, Toolbar, Typography } from "@mui/material";
import { PlanSelect } from "./PlanSelect";

export const NavBar = () => {
  return (
    <AppBar
      sx={{
        position: "absolute",
        direction: { xs: "column", sm: "row" },
      }}
    >
      <Toolbar sx={{ m: 2 }}>
        <Grid
          container
          sx={{
            alignItems: "center",
            justifyContent: { xs: "center", sm: "space-between" },
          }}
          style={{ flexFlow: "wrap" }}
          rowGap={1}
        >
          <Typography
            component="div"
            noWrap
            sx={{ userSelect: "none" }}
            variant="h5"
          >
            UTN Flowchart
          </Typography>
          <PlanSelect />
          <IconButton
            aria-label="Github repository"
            href="https://github.com/jlsuh/utn-flowsheet"
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
};
