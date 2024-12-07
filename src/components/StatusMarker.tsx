import { PlanContext } from '@/context';
import type { Status, SubjectProps } from '@/types';
import { Box, Divider, Link } from '@mui/material';
import { dividerClasses } from '@mui/material/Divider';
import { use } from 'react';

function StatusMarker({
  levelSubjects,
  renderDivider,
  status,
}: {
  levelSubjects: ReadonlyArray<SubjectProps>;
  renderDivider: boolean;
  status: Status;
}) {
  const { updateStatuses } = use(PlanContext);

  const handleClickStatusMarker = () => {
    const newStatus = status;
    updateStatuses(levelSubjects, newStatus);
  };

  return (
    <Box
      sx={{
        [`& .${dividerClasses.root}`]: {
          mx: 0.5,
        },
        display: 'flex',
      }}
    >
      <Link
        component="button"
        onClick={handleClickStatusMarker}
        underline="hover"
      >
        {status.name}
      </Link>
      {renderDivider ? <Divider flexItem orientation="vertical" /> : null}
    </Box>
  );
}

export default StatusMarker;
