import { Box, Toolbar } from "@mui/material";
import { NavBar } from "../components";

export const PlanLayout = ({ children }) => {
  return (
    <>
      <NavBar />
      <Box component="main" sx={{ overflowWrap: "anywhere" }}>
        <Toolbar disableGutters sx={{ my: { xs: 8.5, sm: 0.5 } }} />
        {children}
      </Box>
    </>
  );
};
