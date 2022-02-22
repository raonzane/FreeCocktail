import React, { useState } from 'react';
import {
  Container,
  CreateImg,
  CreateDetails,
  CreateTitle,
  CreateInput,
  CreateTextarea,
  Br,
  SubmitBtn,
} from './RecipeCreate.style';
import AddImg from './AddImg/AddImg';
import Dropdown from './Dropdown/Dropdown';
import Tag from './Tag/Tag';
import PMInput from './PMInput/PMInput';

const RecipeCreate = function RecipeCreate() {
  return (
    <Container>
      <CreateImg>
        <AddImg />
      </CreateImg>
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
        <PMInput />

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
