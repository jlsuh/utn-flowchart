import { PlanContext } from '@/context';
import { plans } from '@/data';
import type { PlanContextProps } from '@/types';
import {
  FormControl,
  MenuItem,
  Select,
  type SelectChangeEvent,
} from '@mui/material';
import { use } from 'react';
import { useNavigate } from 'react-router-dom';

const selectStyles = {
  color: 'primary.contrastText',
  '.MuiSelect-select': {
    backgroundColor: 'primary.dark',
  },
  '.MuiOutlinedInput-notchedOutline': {
    borderColor: 'primary.dark',
  },
  '&:hover .MuiOutlinedInput-notchedOutline': {
    borderColor: 'primary.dark',
  },
  '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
    borderColor: 'primary.dark',
  },
  '.MuiSvgIcon-root ': {
    color: 'background.default',
  },
};

function PlanSelect({ availablePlans = plans }) {
  const { contextPlan } = use<PlanContextProps>(PlanContext);
  const navigate = useNavigate();

  const handleChangeMenuItem = (event: SelectChangeEvent<string>) => {
    navigate(`/${event.target.value}`, {
      replace: true,
    });
  };

  return (
    <FormControl sx={{ width: { xs: '100%', sm: 280 } }}>
      <Select
        inputProps={{ 'aria-label': 'Select plan', name: 'plan-select' }}
        MenuProps={{
          disableScrollLock: true,
          style: { position: 'absolute' },
        }}
        onChange={handleChangeMenuItem}
        sx={selectStyles}
        value={contextPlan.id}
      >
        {availablePlans.map(({ id, branch }, index) => (
          <MenuItem
            divider={index < availablePlans.length - 1}
            key={`${id}-menu-item`}
            value={id}
          >
            {`${id.toUpperCase()} - ${branch}`}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

export default PlanSelect;
