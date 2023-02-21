import * as React from 'react';

import Button from '@mui/material/Button';

export default function uploadPic({handleSelectImage}) {
    const [imageUrl, setImageUrl] = React.useState([]);
    const [selectedImage, setSelectedImage] = React.useState([]);
  return (
    <>
      <input
        multiple
        accept="image/*"
        type="file"
        id="select-image"
        style={{ display: "none" }}
        onChange={handleSelectImage}
      />
      <label htmlFor="select-image">
        <Button variant="contained" color="primary" component="span">
          Upload Image
        </Button>
      </label>

    </>
  );
};

// export default UploadPic;