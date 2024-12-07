import { PlanContext } from '@/context';
import { statuses } from '@/data';
import type { PlanContextProps, SubjectProps } from '@/types';
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from '@mui/material';
import { type ChangeEvent, use } from 'react';

function StatusRadioGroup({ subject }: { subject: SubjectProps }) {
  const { contextPlan, updateStatuses } = use<PlanContextProps>(PlanContext);
  const contextSubject = contextPlan.subjects[subject.id];
  const contextStatus = contextSubject.status;

  const handleChangeRadioInput = (event: ChangeEvent<HTMLInputElement>) => {
    const newStatus = JSON.parse(event.target.value);
    updateStatuses([subject], newStatus);
  };

  return (
    <FormControl sx={{ width: '100%' }}>
      <FormLabel component="legend">Estado</FormLabel>
      <RadioGroup
        aria-label="Status"
        defaultValue={JSON.stringify(contextStatus)}
        name={`${subject.id}-status-radio-group`}
        onChange={handleChangeRadioInput}
        value={JSON.stringify(contextStatus)}
      >
        {Object.values(statuses).map((status, index) => (
          <FormControlLabel
            control={<Radio />}
            key={`${subject.id}-status-radio-group-input-${index}`}
            label={status.name}
            value={JSON.stringify(status)}
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
}

export default StatusRadioGroup;
