import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function PriceComponent({handlePrice}) {
  const [promptPrice, setPromptPrice] = React.useState('2.99');

  const handleDisplayPrice = (event) => {
    
    setPromptPrice(event.target.value);
  }

  const priceList = ["1.99", "2.99", "3.99", "4.99", "5.99", "6.99", "7.99", "8.99", "9.99"]
  return (
    <FormControl sx={{ m: 1, minWidth: 300 }} >
      <InputLabel id="demo-select-small">Price</InputLabel>
      <Select
        labelId="demo-select-small"
        id="demo-select-small"
        value={promptPrice || ""}
        label="PromptPrice"
        onChange={e => {handlePrice(e), handleDisplayPrice(e)}}
        key="promptprice"
      >
        {priceList.map(element => (
          <MenuItem value={element}>
            ${element}
          </MenuItem>
        ))
        }
      </Select>
    </FormControl>
  );
}