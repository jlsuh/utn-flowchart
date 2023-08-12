import { Box, Divider, Link } from "@mui/material";
import { useContext } from "react";
import { PlanContext } from "../context";

export const StatusMarker = ({ status, levelSubjects }) => {
  const { updateStatuses } = useContext(PlanContext);

  const handleClickStatusMarker = () => {
    const newStatus = status;
    updateStatuses(levelSubjects, newStatus);
  };

  return (
    <Box
      sx={{
        "& hr": {
          mx: 0.5,
        },
        display: "flex",
      }}
    >
      <Link
        onClick={handleClickStatusMarker}
        component="button"
        underline="hover"
      >
        {status.name}
      </Link>
      <Divider orientation="vertical" flexItem />
    </Box>
  );
};
