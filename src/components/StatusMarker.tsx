import { Box, Divider, Link } from '@mui/material';
import { useContext } from 'react';
import { PlanContext } from '../context';
import { PlanContextProps, Status, Subject } from '../types/types';

export const StatusMarker = ({
  status,
  levelSubjects,
}: {
  status: Status;
  levelSubjects: ReadonlyArray<Subject>;
}) => {
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
};
