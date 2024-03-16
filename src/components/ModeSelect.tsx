import { PlanContext } from '@/context';
import type { PlanContextProps, SubjectProps } from '@/types';
import { replaceWhiteSpace } from '@/utils';
import { FormControl, InputLabel, NativeSelect } from '@mui/material';
import { type ChangeEvent, useContext } from 'react';

function ModeSelect({ subject }: { subject: SubjectProps }) {
  const { contextPlan, updateMode } = useContext<PlanContextProps>(PlanContext);
  const targetSubject = contextPlan.subjects[subject.id];
  const contextMode = targetSubject.modes[0];

  const onSelectInputChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const newMode = JSON.parse(event.target.value);
    updateMode(subject.id, newMode);
  };

  return (
    <FormControl fullWidth sx={{ mt: 1, mx: 1 }}>
      <InputLabel variant="standard" htmlFor={`${subject.id}-input-label`}>
        Modalidad
      </InputLabel>
      <NativeSelect
        inputProps={{
          id: `${subject.id}-input-label`,
          name: `${subject.id}`,
        }}
        onChange={onSelectInputChange}
        value={JSON.stringify(contextMode)}
      >
        {subject.modes.map((mode) => (
          <option
            key={`${replaceWhiteSpace(`${subject.id}-${mode}`)}`}
            value={JSON.stringify(mode)}
          >
            {mode}
          </option>
        ))}
      </NativeSelect>
    </FormControl>
  );
}

export default ModeSelect;
