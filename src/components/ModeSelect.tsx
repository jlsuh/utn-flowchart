import { FormControl, InputLabel, NativeSelect } from "@mui/material";
import { ChangeEvent, useContext } from "react";
import { PlanContext } from "../context";
import { PlanContextProps, Subject } from "../types/types";
import { replaceWhiteSpace } from "../utils";

export const ModeSelect = ({ subject }: { subject: Subject }) => {
  const { contextPlan, updateMode } = useContext<PlanContextProps>(PlanContext);
  const { subjects } = contextPlan;
  const targetSubject = subjects[
    subject.id as keyof typeof subjects
  ] as Subject;
  const contextMode = targetSubject.mode ?? targetSubject.modes![0];

  const onSelectInputChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const newMode = JSON.parse(event.target.value);
    updateMode(subject.id!, newMode);
  };

  return (
    <FormControl fullWidth sx={{ mt: 1, mx: 1 }}>
      <InputLabel variant="standard" htmlFor={`${subject.id}-input-label`}>
        Modalidad
      </InputLabel>
      <NativeSelect
        inputProps={{
          id: `${subject.id}-input-label`,
          name: "" + subject.id,
        }}
        onChange={onSelectInputChange}
        value={JSON.stringify(contextMode)}
      >
        {subject.modes!.map((mode) => (
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
};
