import { PlanContext } from '@/context';
import type { PlanContextProps, Status, SubjectProps } from '@/types';
import { Box, Divider, Link } from '@mui/material';
import { dividerClasses } from '@mui/material/Divider';
import { useContext } from 'react';

function StatusMarker({
  levelSubjects,
  renderDivider,
  status,
}: {
  levelSubjects: ReadonlyArray<SubjectProps>;
  renderDivider: boolean;
  status: Status;
}) {
  const { updateStatuses } = useContext<PlanContextProps>(PlanContext);

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
