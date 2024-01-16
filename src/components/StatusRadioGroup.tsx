import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import { ChangeEvent, useContext } from "react";
import { PlanContext } from "../context";
import { statuses } from "../data";
import { PlanContextProps, Subject } from "../types/types";

export const StatusRadioGroup = ({ subject }: { subject: Subject }) => {
  const { contextPlan, updateStatuses } =
    useContext<PlanContextProps>(PlanContext);
  const contextStatus = (contextPlan.subjects as Record<string, Subject>)[
    subject.id
  ].status;

  const handleChangeRadioInput = (event: ChangeEvent<HTMLInputElement>) => {
    const newStatus = JSON.parse(event.target.value);
    updateStatuses([subject], newStatus);
  };

  return (
    <FormControl sx={{ width: "100%" }}>
      <FormLabel id={`${subject.id}`}>Estado</FormLabel>
      <RadioGroup
        aria-labelledby={`${subject.id}`}
        defaultValue={JSON.stringify(contextStatus)}
        name={`${subject.id}`}
        onChange={handleChangeRadioInput}
        value={JSON.stringify(contextStatus)}
      >
        {Object.values(statuses).map((status, index) => (
          <FormControlLabel
            control={<Radio />}
            key={`${subject.id}-radio-input-${index}`}
            label={status.name}
            value={JSON.stringify(status)}
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
};
