import { Box, Grid, Stack, Typography } from "@mui/material";
import { useContext } from "react";
import { PlanContext } from "../context";
import { statuses } from "../data";
import { PlanContextProps } from "../types/types";
import { findPlanById, replaceWhiteSpace } from "../utils";
import { StatusMarker } from "./StatusMarker";
import { SubjectGrid } from "./SubjectGrid";

export const SubjectStack = () => {
  const { contextPlan } = useContext<PlanContextProps>(PlanContext);
  const plan = findPlanById(contextPlan.id);
  const subjectsByLevel = plan?.subjects;

  return (
    <Stack spacing={3}>
      {Array.isArray(subjectsByLevel) &&
        subjectsByLevel.map((levelSubjects, index) => (
          <Grid
            container
            key={`level-${index + 1}-grid`}
            sx={{
              flexDirection: "column",
            }}
          >
            <Grid
              item
              sx={{
                alignItems: "baseline",
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "space-between",
              }}
            >
              <Box>
                <Typography variant="h3" sx={{ ml: 1 }}>
                  {index + 1}° año
                </Typography>
              </Box>
              <Grid
                item
                sx={{ display: "flex", flexWrap: "wrap", userSelect: "none" }}
              >
                <Typography sx={{ mr: 0.5 }}>Marcar a todas como:</Typography>
                {Object.values(statuses).map((status) => (
                  <StatusMarker
                    key={`${replaceWhiteSpace(
                      `${status.name}-status-marker-${index}`,
                    )}`}
                    status={status}
                    levelSubjects={levelSubjects}
                  />
                ))}
              </Grid>
            </Grid>
            <SubjectGrid levelSubjects={levelSubjects} />
          </Grid>
        ))}
    </Stack>
  );
};
