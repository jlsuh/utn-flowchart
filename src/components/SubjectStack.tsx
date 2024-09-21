import { StatusMarker, SubjectGrid } from '@/components';
import { PlanContext } from '@/context';
import { statuses } from '@/data';
import type { PlanContextProps } from '@/types';
import { findPlanById, replaceWhiteSpace } from '@/utils';
import { Box, Stack, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { useContext } from 'react';

function SubjectStack() {
  const { contextPlan } = useContext<PlanContextProps>(PlanContext);
  const plan = findPlanById(contextPlan.id);
  const subjectsByLevel = plan.subjects;
  const statusesMaxIndex = Object.values(statuses).length - 1;

  return (
    <Stack spacing={3}>
      {Array.isArray(subjectsByLevel) &&
        subjectsByLevel.map((levelSubjects, index) => (
          <Grid
            container
            key={`level-${index + 1}-grid`}
            sx={{
              flexDirection: 'column',
              flexWrap: 'nowrap',
            }}
          >
            <Grid
              sx={{
                alignItems: 'baseline',
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'space-between',
              }}
            >
              <Box>
                <Typography sx={{ ml: 1 }} variant="h3">
                  {index + 1}° año
                </Typography>
              </Box>
              <Grid
                sx={{ display: 'flex', flexWrap: 'wrap', userSelect: 'none' }}
              >
                <Typography sx={{ mr: 0.5 }}>Marcar a todas como:</Typography>
                {Object.values(statuses).map((status, index) => (
                  <StatusMarker
                    key={`${replaceWhiteSpace(
                      `${status.name}-status-marker-${index}`,
                    )}`}
                    levelSubjects={levelSubjects}
                    renderDivider={index < statusesMaxIndex}
                    status={status}
                  />
                ))}
              </Grid>
            </Grid>
            <SubjectGrid levelSubjects={levelSubjects} />
          </Grid>
        ))}
    </Stack>
  );
}

export default SubjectStack;
