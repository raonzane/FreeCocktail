import React, { useState } from 'react';
import {
  Container,
  CenterArea,
  CreateImg,
  CreateDetails,
  CreateTitle,
  CreateInput,
  CreateTextarea,
  Br,
  AddBtn,
  SubmitBtn,
} from './RecipeCreate.style';
import Dropdown from './Dropdown/Dropdown';
import Tag from './Tag/Tag';

const RecipeCreate = function RecipeCreate() {
  // const addInput = () => {};
  return (
    <Container>
      <CreateImg>Image</CreateImg>
      <CreateDetails>
        <CreateTitle>칵테일 이름</CreateTitle>
        <CreateInput />

        <Br />
        <CreateTitle>칵테일 베이스</CreateTitle>
        <Dropdown />

        <Br />
        <CreateTitle>태그</CreateTitle>
        <Tag />

        <Br />
        <CreateTitle>재료 및 용량</CreateTitle>
        <CreateInput />
        <CenterArea>
          <AddBtn>+</AddBtn>
        </CenterArea>

        <Br />
        <CreateTitle>만드는법</CreateTitle>
        <CreateTextarea />

        <Br />
        <SubmitBtn>레시피 등록</SubmitBtn>
      </CreateDetails>
    </Container>
  );
};

export default RecipeCreate;
