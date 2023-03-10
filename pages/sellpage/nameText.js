import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function NameText({handleName}) {
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '70ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField label="Name" onChange={handleName} color="success" focused />

    </Box>
  );
}