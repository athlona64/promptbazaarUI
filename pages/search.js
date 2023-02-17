import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

import Grid from '@mui/material/Unstable_Grid2';


export default function FullSearch() {
  return (
    <Grid
    container
    spacing={0}
    direction="column"
    alignItems="center"
    justifyContent="center"
  >
    <Box
      sx={{
        width: 2/4,
        maxWidth: '100%',
        backgroundColor: '#23272a',
      }}
    >
      <TextField  fullWidth color='warning' label="Find prompt" id="fullWidth"
       sx={{
         fieldset: { borderColor: "orange" }
         }} />
    </Box>
    </Grid>
  );
}