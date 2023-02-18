import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function PromptInstuction() {
  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '70ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>

        <TextField
          id="outlined-multiline-static"
          label="Prompt Instuction"
          placeholder='tip You can use weapons hold in each hand.'
          multiline
          rows={4}
          defaultValue=""
        />
      </div>
     
    </Box>
  );
}