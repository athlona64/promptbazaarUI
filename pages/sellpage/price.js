import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function PriceComponent({handlePrice}) {
  const [promptPrice, setPromptPrice] = React.useState('');

  const handleDisplayPrice = (event) => {
    setPromptPrice(event.target.price);
  }
  return (
    <FormControl sx={{ m: 1, minWidth: 300 }} >
      <InputLabel id="demo-select-small">Price</InputLabel>
      <Select
        labelId="demo-select-small"
        id="demo-select-small"
        value={promptPrice}
        label="PromptPrice"
        onChange={e => {handlePrice(e), handleDisplayPrice(e)}}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={1.99}>
          $1.99
        </MenuItem>
        <MenuItem value={2.99}>$2.99</MenuItem>
        <MenuItem value={3.99}>$3.99</MenuItem>
        <MenuItem value={4.99}>$4.99</MenuItem>
        <MenuItem value={5.99}>$5.99</MenuItem>
        <MenuItem value={6.99}>$6.99</MenuItem>
        <MenuItem value={7.99}>$7.99</MenuItem>
        <MenuItem value={8.99}>$8.99</MenuItem>
        <MenuItem value={9.99}>$9.99</MenuItem>
      </Select>
    </FormControl>
  );
}