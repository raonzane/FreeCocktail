import React, { useState } from 'react';
import {
  Container,
  DefaultImg,
  HoverArea,
  HoveredArea,
  HoverIcon,
} from './AddImg.style';

const AddImg = function AddImg() {
  const changeImage = (e: any) => {
    const img = e.target.files[0];
    const formData = new FormData();
    formData.append('img', img);
    console.log(formData); // FormData {}
  };

  return (
    <Container>
      <HoverArea className="HoverArea" htmlFor="image" onChange={changeImage}>
        <input
          type="file"
          name="image"
          id="image"
          style={{ display: 'none' }}
          onChange={changeImage}
        />
        <DefaultImg
          className="DefaultImg"
          src="/defaultImg.png"
          alt="Default Image"
        />
        <HoveredArea className="HoveredArea">
          <HoverIcon className="hoverIcon" src="/camera.png" alt="" />
          <span>Edit Image</span>
        </HoveredArea>
      </HoverArea>
    </Container>
  );
};

export default AddImg;
