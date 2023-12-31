import {
  FormControl,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { PlanContext } from "../context/PlanContext";
import { plans } from "../data";
import { PlanContextProps } from "../types/types";

const selectStyles = {
  color: "primary.contrastText",
  ".MuiSelect-select": {
    backgroundColor: "primary.dark",
  },
  ".MuiOutlinedInput-notchedOutline": {
    borderColor: "primary.dark",
  },
  "&:hover .MuiOutlinedInput-notchedOutline": {
    borderColor: "primary.dark",
  },
  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
    borderColor: "primary.dark",
  },
  ".MuiSvgIcon-root ": {
    color: "background.default",
  },
};

export const PlanSelect = ({ availablePlans = plans }) => {
  const { contextPlan } = useContext<PlanContextProps>(PlanContext);
  const navigate = useNavigate();

  const handleChangeMenuItem = (event: SelectChangeEvent<string>) => {
    navigate(`/${event.target.value}`, {
      replace: true,
    });
  };

  return (
    <FormControl sx={{ width: { xs: "100%", sm: 250 } }}>
      <Select
        inputProps={{ "aria-label": "Seleccionar plan" }}
        MenuProps={{
          disableScrollLock: true,
          style: { maxWidth: 0, maxHeight: 300, position: "absolute" },
        }}
        onChange={handleChangeMenuItem}
        sx={selectStyles}
        value={contextPlan.id}
      >
        {availablePlans.map(({ id, branch }) => (
          <MenuItem key={`${id}-menu-item`} value={id}>
            {`${id.toUpperCase()} - ${branch}`}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
