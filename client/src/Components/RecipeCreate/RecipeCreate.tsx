import React, { useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { recipeData } from '../../_slices/recipeSlice';
import { userData } from '../../_slices/userSlice';

import {
  Container,
  RecipeData,
  InvalidMessage,
  Br,
  SubmitBtn,
} from './RecipeCreate.style';
import AddImg from './AddImg/AddImg';
import Name from './Name/Name';
import BaseDrink from './BaseDrink/BaseDrink';
import Tag from './Tag/Tag';
import Ingredient from './Ingredient/Ingredient';
import Instruction from './Instruction/Instruction';

const RecipeCreate = function RecipeCreate() {
  document.body.style.overflow = 'hidden'; //* 모달 열 때 body 스크롤 제어
  const navigate = useNavigate();
  const data = useSelector(recipeData);
  const userInfo: any = useSelector(userData);

  //* 입력정보 유효성 검사
  const [isValid, setIsValid] = useState<boolean>(true);
  const submit = () => {
    if (
      data.name &&
      data.baseDrink &&
      data.instructions &&
      data.tags[0] &&
      data.ingredient[0] &&
      data.measure[0]
    ) {
      setIsValid(true);
      //* formData 선언 후 append
      const formData = new FormData();
      formData.append('image', data.image);
      formData.append('name', data.name);
      formData.append('baseDrink', data.baseDrink);
      formData.append('Instructions', data.instructions);
      data.tags.map((el) => formData.append('tags', el));
      data.ingredient.map((el) => formData.append('Ingredient', el));
      data.measure.map((el) => formData.append('measure', el));
      formData.append('userId', userInfo.id);
      console.log(...formData);
      axios
        .post(`http://localhost:3001/recipe`, formData)
        .then((res) => {
          alert(`${res.data.name} 레시피 등록이 완료되었습니다!`);
          navigate(0);
        })
        .catch((err) => {
          if (err.response.status === 404) alert('잘못된 레시피 데이터입니다!');
          console.log(err);
        });
    } else {
      setIsValid(false);
    }
  };

  return (
    <Container>
      <AddImg />

      <RecipeData>
        <Name />
        <BaseDrink />
        <Tag />
        <Ingredient />
        <Instruction />
        {isValid ? (
          <Br />
        ) : (
          <InvalidMessage>입력사항을 모두 입력해주세요.</InvalidMessage>
        )}
        <SubmitBtn onClick={submit}>레시피 등록</SubmitBtn>
      </RecipeData>
    </Container>
  );
};

export default RecipeCreate;
