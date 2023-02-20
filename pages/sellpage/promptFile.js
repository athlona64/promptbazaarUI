import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import { Typography } from '@mui/material';
import TypeComponent from './typecomponent'
import PromptMessage from './promptMessage';
import DetailTextTwo from './detailText';
import PriceComponent from './price';
import PromptInstuction from './promptInstuction';
import UploadPic from './uploadPic';
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'left',
  color: theme.palette.text.secondary,
}));

export default function PromptFile() {

  return (
    <>
    <Box sx={{ width: 2/3, mx: 20 }}>
      <Stack spacing={2}>
        <Item><Typography variant='h4'>Prompt File</Typography>
        <br/>
        <Typography>Copy and paste your Midjourney prompt.</Typography>
        <Typography>*Include all your settings as tags within the prompt (e.g. --v 4 --q 2)</Typography>

        <br/>
        <Typography sx={{ fontSize: 12}}>*Prompt</Typography>
        <Typography sx={{ fontSize: 14, fontWeight: 300, fontStyle: 'italic'}}>Put any variables in [square brackets].</Typography>
        <PromptMessage></PromptMessage>

        <br/>
        <Typography sx={{ fontSize: 12}}>Prompt Instructions</Typography>
        <Typography sx={{ fontSize: 14, fontWeight: 300, fontStyle: 'italic'}}>Any extra tips or examples for the buyer on how to use this prompt.</Typography>
        <PromptInstuction></PromptInstuction>

        <br/>
        <Typography sx={{ fontSize: 12}}>Description</Typography>
        <Typography sx={{ fontSize: 14, fontWeight: 300, fontStyle: 'italic'}}>Describe what your prompt does to a potential buyer. A more detailed description will increase your sales.</Typography>
        <DetailTextTwo></DetailTextTwo>

        <br/>
        <Typography sx={{ fontSize: 12}}>*Upload 4 to 6 example images generated by this prompt (no collages or edits)</Typography>
        <Typography sx={{ fontSize: 14, fontWeight: 300, fontStyle: 'italic'}}>Only upload your images generated by Midjourney.</Typography>
        <Typography sx={{ fontSize: 14, fontWeight: 300, fontStyle: 'italic'}}>Prompts with more example images usually get more sales.</Typography>
        <UploadPic></UploadPic>
        </Item>
      </Stack>
    </Box>
    </>
  );
}