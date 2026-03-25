import { Box, Grid, Stack, Typography } from '@mui/material';
import { use } from 'react';
import { StatusMarker, SubjectGrid } from '@/components';
import { PlanContext } from '@/context';
import { statuses } from '@/data';
import { findPlanById, replaceWhiteSpace } from '@/utils';

function SubjectStack() {
  const { contextPlan } = use(PlanContext);
  const plan = findPlanById(contextPlan.id);
  const subjectsByLevel = plan.subjects;
  const statusesMaxIndex = Object.values(statuses).length - 1;

  return (
    <Stack spacing={3}>
      {Array.isArray(subjectsByLevel) &&
        subjectsByLevel.map((levelSubjects, index) => {
          const key = `level-${index + 1}-grid`;
          return (
            <Grid
              container
              key={key}
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
          );
        })}
    </Stack>
  );
}

export default SubjectStack;
