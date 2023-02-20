import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function DetailTextTwo() {
  const [promptDetailTextTwo, setPromptDetailTextTwo] = React.useState('');

  const handleDetailTwo = (event) => {
    setPromptDetailTextTwo(event.target.value);
  }
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
          onChange={handleDetailTwo}
          label="description"
          multiline
          rows={4}
          defaultValue=""
        />
      </div>
     
    </Box>
  );
}