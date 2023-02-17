import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import TitlebarImageList from './toprightbox'

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Caveat, Permanent_Marker, Courgette, Press_Start_2P, Ubuntu_Mono } from '@next/font/google'

const prompt = Ubuntu_Mono({
  weight: '400',
  subsets: ['latin'],
});
const Item = styled('div')(({ theme }) => ({
//   backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.h5,
  padding: theme.spacing(1),
  textAlign: 'left',
//   color: theme.palette.text.secondary,
}));

const TitleRainbow = styled('div')(({ theme }) => ({
    ...theme.typography.h3,
    background: "-webkit-linear-gradient(45deg, #ffffff 45%, #FF8E53 85%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent"
     
  }));

const BaseText = styled('p')(({ theme }) =>({
    ...theme.typography.h5,
    color: "#ffffff"
}));

export default function BasicGrid() {
 
  return (
    <Box sx={{ flexGrow: 1 }} >
      <Grid container spacing={15}>
        <Grid xs={1} ></Grid>
        <Grid xs={4} >
          <Item>
            <TitleRainbow className={prompt.className}>Midjourney Prompt marketplace instant payment with smart contract</TitleRainbow>
            <br></br>
            <BaseText className={prompt.className}>
            Find top quality prompts for your products
            </BaseText>
            <Stack m={4} spacing={3} direction="row" justifyContent="center" alignItems="center">
                <Button variant="contained" style={{color:'#000000', backgroundColor:'#ffffff'}}>Sell a prompt</Button>
                <Button variant="outlined" color="warning">Find a prompt</Button>
            </Stack>
          </Item>
        </Grid>
        <Grid xs={1}></Grid>
        <Grid xs={4}>
          <Item><TitlebarImageList></TitlebarImageList></Item>
        </Grid>
        <Grid xs={2}></Grid>
      </Grid>
    </Box>
  );
}