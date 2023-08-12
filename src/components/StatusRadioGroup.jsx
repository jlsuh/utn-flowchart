import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import { useContext } from "react";
import { PlanContext } from "../context";
import { statuses } from "../data";

export const StatusRadioGroup = ({ subject }) => {
  const { contextPlan, updateStatuses } = useContext(PlanContext);
  const contextStatus = contextPlan.subjects[subject.id].status;

  const handleChangeRadioInput = (event) => {
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
