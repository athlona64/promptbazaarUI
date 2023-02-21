import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import { Typography } from '@mui/material';
import TypeComponent from './typecomponent'
import NameText from './nameText';
import DetailText from './detailText';
import PriceComponent from './price';
import Grid from '@mui/material/Grid';
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'left',
  color: theme.palette.text.secondary,
}));

export default function PromptDetail() {

    const [promptType, setPromptType] = React.useState('');
    const [promptName, setPromptName] = React.useState('');
    const [promptDetailText, setPromptDetailText] = React.useState('');
    const [promptPrice, setPromptPrice] = React.useState('');

    const handlePrice = (event) => {
        console.log(event.target.value);
      setPromptPrice(event.target.value);
     
    };
    const handleDetail = (event) => {

      console.log(event.target.value);
      setPromptDetailText(event.target.value);
     
    }
    const handleName = (event) => {
        console.log(event.target.value);
      setPromptName(event.target.value);
    }
    const handleChange = (event) => {
      console.log(event.target.value);
      setPromptType(event.target.value);
    };
   
  return (
    <>
    <Grid container sx={{ width: 2/3, mx: 20}}>
      <Stack spacing={2}>
        <Item><Typography variant='h4'>Prompt Details</Typography>
        <br/>
        <Typography>Tell us about the prompt you want to sell.</Typography>
        <Typography>These details are not final. Our team will make edits if it goes live.</Typography>

        <br/>
        <Typography sx={{ fontSize: 12}}>Prompt Type</Typography>
        <Typography sx={{ fontSize: 14, fontWeight: 300, fontStyle: 'italic'}}>Select the type of prompt you want to sell.</Typography>
        <TypeComponent handleChange={handleChange}></TypeComponent>

        <br/>
        <Typography sx={{ fontSize: 12}}>Name</Typography>
        <Typography sx={{ fontSize: 14, fontWeight: 300, fontStyle: 'italic'}}>Suggest a title for this prompt.</Typography>
        <NameText handleName={handleName}></NameText>

        <br/>
        <Typography sx={{ fontSize: 12}}>Description</Typography>
        <Typography sx={{ fontSize: 14, fontWeight: 300, fontStyle: 'italic'}}>Describe what your prompt does to a potential buyer. A more detailed description will increase your sales.</Typography>
        <DetailText handleDetail={handleDetail}></DetailText>

        <br/>
        <Typography sx={{ fontSize: 12}}>Price</Typography>
        <Typography sx={{ fontSize: 14, fontWeight: 300, fontStyle: 'italic'}}>What do you think the price of this prompt should be?</Typography>
        <PriceComponent handlePrice={handlePrice}></PriceComponent>
        </Item>
      </Stack>
    </Grid>
    </>
  );
}