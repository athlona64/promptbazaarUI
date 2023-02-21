import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function TypeComponent({handleChange}) {

  const [promptType, setPromptType] = React.useState('');
  
  return (
    <FormControl sx={{ m: 1, minWidth: 300 }} >
      <InputLabel id="demo-select-small">Prompt Type</InputLabel>
      <Select
        labelId="demo-select-small"
        id="demo-select-small"
        value={promptType}
        label="PromptType"
        onChange={handleChange}
      >
        <MenuItem value="">
          <em>Midjourney</em>
        </MenuItem>
        <MenuItem value='Midjourney'>Midjourney</MenuItem>

      </Select>
    </FormControl>
  );
}