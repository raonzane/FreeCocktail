import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { recipeData, addRecipe } from '../../../_slices/recipeSlice';

import {
  Container,
  DefaultImg,
  HoverArea,
  HoveredArea,
  HoverIcon,
} from './AddImg.style';

const AddImg = function AddImg() {
  const data = useSelector(recipeData);
  const dispatch = useDispatch();

  const [img, setImg] = useState<any>();

  //* 이미지 미리보기
  const changeImage = (e: any) => {
    const reader = new FileReader();

    reader.onloadend = () => {
      const base64 = reader.result;
      if (base64) {
        setImg(base64.toString());
      }
    };
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }
    console.log(e.target.files[0]);
    // dispatch(
    //   addRecipe({
    //     ...data,
    //     image: e.target.files[0],
    //   })
    // );
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
          src={img || '/defaultImg.png'}
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
