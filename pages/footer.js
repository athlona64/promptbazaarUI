import * as React from 'react';
import Box from '@mui/material/Box';
import { createSvgIcon } from '@mui/material/utils';
import { Divider } from '@mui/material';
import TwitterIcon from '@mui/icons-material/Twitter';
const HomeIcon = createSvgIcon(
  <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />,
  'Home',
);

export default function GuestFooter() {
  return (
    <>
    <Divider variant="middle" style={{ background: 'white' }}   />
    <Box
    display="flex"
    justifyContent="center"
    alignItems="center"
    minHeight="10vh"
      sx={{
        '& > :not(style)': {
          m: 2,
        },

      }}

    >
        PromptBazaar (c) 2023 // 
      <TwitterIcon />
      {/* <TwitterIcon color="primary" /> */}
    </Box>
    </>
  );
}