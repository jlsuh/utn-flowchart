import { PlanContext } from '@/context';
import type { PlanContextProps, Status, Subject } from '@/types';
import { Box, Divider, Link } from '@mui/material';
import { useContext } from 'react';

function StatusMarker({
  status,
  levelSubjects,
}: {
  status: Status;
  levelSubjects: ReadonlyArray<Subject>;
}) {
  const { updateStatuses } = useContext<PlanContextProps>(PlanContext);

  const handleClickStatusMarker = () => {
    const newStatus = status;
    updateStatuses(levelSubjects, newStatus);
  };

  return (
    <Box
      sx={{
        '& hr': {
          mx: 0.5,
        },
        display: 'flex',
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
}

export default StatusMarker;
