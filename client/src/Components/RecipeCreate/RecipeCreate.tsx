import React, { useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { recipeData } from '../../_slices/recipeSlice';

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
  const data = useSelector(recipeData);

  //* 입력정보 유효성 검사
  const [isEmpty, setIsEmpty] = useState<boolean>(false);
  const submit = () => {
    console.log(data);
    if (
      data.name.length < 1 ||
      data.baseDrink.length < 1 ||
      data.tags.length < 1 ||
      data.ingredient[0].length < 1 ||
      data.measure[0].length < 1 ||
      data.instructions.length < 1
    ) {
      setIsEmpty(true);
      const formData = new FormData();
      // formData.set('image', data.image);
      // formData.set('name', data.name);
      // formData.set('baseDrink', data.baseDrink);
      // formData.set('tags', data.tags);
      // formData.set('ingredient', data.ingredient);
      // formData.set('measure', data.measure);
      // formData.set('instructions', data.instructions);
      // axios.post('url', formData).then((res) => console.log(res));
    } else {
      setIsEmpty(false);
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
        {isEmpty ? (
          <InvalidMessage>입력사항을 모두 입력해주세요.</InvalidMessage>
        ) : (
          <Br />
        )}
        <SubmitBtn onClick={submit}>레시피 등록</SubmitBtn>
      </RecipeData>
    </Container>
  );
};

export default RecipeCreate;
