import { Subject } from '@/components';
import type { SubjectProps } from '@/types';
import Grid from '@mui/material/Grid2';

function SubjectGrid({
  levelSubjects,
}: {
  levelSubjects: ReadonlyArray<SubjectProps>;
}) {
  return (
    <Grid
      container
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        pt: 1.5,
      }}
    >
      {levelSubjects.map((subject) => (
        <Subject key={subject.id} subject={subject} />
      ))}
    </Grid>
  );
}

export default SubjectGrid;
