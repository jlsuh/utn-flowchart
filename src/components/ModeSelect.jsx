import { FormControl, InputLabel, NativeSelect } from "@mui/material";
import { useContext } from "react";
import { PlanContext } from "../context";
import { replaceWhiteSpace } from "../utils";

export const ModeSelect = ({ subject }) => {
  const { contextPlan, updateMode } = useContext(PlanContext);
  const contextMode = contextPlan.subjects[subject.id].mode;

  const onSelectInputChange = (event) => {
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
          name: "" + subject.id,
        }}
        onChange={onSelectInputChange}
        value={JSON.stringify(contextMode)}
      >
        {subject.modes.map((mode) => (
          <option
            key={`${replaceWhiteSpace(`${subject.id}-${mode}`, "-")}`}
            value={JSON.stringify(mode)}
          >
            {mode}
          </option>
        ))}
      </NativeSelect>
    </FormControl>
  );
};
