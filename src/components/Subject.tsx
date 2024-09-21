import { ModeSelect, StatusRadioGroup } from '@/components';
import { PlanContext } from '@/context';
import type { PlanContextProps, SubjectProps } from '@/types';
import CircleIcon from '@mui/icons-material/Circle';
import { Card, CardActions, CardContent, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { useContext } from 'react';

function Subject({ subject }: { subject: SubjectProps }) {
  const { contextPlan } = useContext<PlanContextProps>(PlanContext);
  const { subjects } = contextPlan;
  const contextSubject = subjects[subject.id];
  const color = contextSubject.status.color;

  return (
    <Grid
      size={{
        xs: 12,
        sm: 6,
        md: 4,
        lg: 3,
        xl: 2,
      }}
    >
      <Card
        sx={{
          borderRadius: 0,
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
          justifyContent: 'space-between',
          p: 2,
        }}
        variant="outlined"
      >
        <CardContent
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            p: 0,
          }}
        >
          <Typography component="h4" variant="h6">
            {subject.name}
          </Typography>
          <CircleIcon
            sx={{
              color,
              fontSize: 24,
              ml: 1,
            }}
          />
        </CardContent>
        <CardActions
          sx={{
            display: 'flex',
            flexDirection: 'column',
            mt: 2,
            p: 0,
            width: '100%',
          }}
        >
          <StatusRadioGroup subject={subject} />
          <ModeSelect subject={subject} />
        </CardActions>
      </Card>
    </Grid>
  );
}

export default Subject;
