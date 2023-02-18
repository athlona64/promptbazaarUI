import * as React from 'react';
import { useState, useEffect } from "react";
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { ImageList, ImageListItem } from '@mui/material';
const UploadPic = () => {
  const [selectedImage, setSelectedImage] = useState([]);
  const [imageUrl, setImageUrl] = useState([]);

  useEffect(() => {
    if (selectedImage) {
      console.log(selectedImage);
      for (const file of selectedImage) {
        // setImageUrl(URL.createObjectURL(file))
        setImageUrl((imgs) => [...imgs, URL.createObjectURL(file)]);
     }
     
    }
  }, [selectedImage]);

  return (
    <>
      <input
        multiple
        accept="image/*"
        type="file"
        id="select-image"
        style={{ display: "none" }}
        onChange={(e) => setSelectedImage(e.target.files)}
      />
      <label htmlFor="select-image">
        <Button variant="contained" color="primary" component="span">
          Upload Image
        </Button>
      </label>
      {imageUrl && selectedImage && (
        <Box mt={2} textAlign="center">
          <div>Image Preview:</div>
            <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={100}>
            {imageUrl.map((imgUrl, i) => (
              <ImageListItem key={imgUrl}>
                <img
                  src={`${imgUrl}`}
                  srcSet={`${selectedImage[i]}`}
                  loading="lazy"
                />
              </ImageListItem>
            ))}
          </ImageList>
         
       
        </Box>
      )}
    </>
  );
};

export default UploadPic;