import React from 'react';
import {
  Container,
  CreateImg,
  CreateDetails,
  CreateTitle,
  CreateInput,
  CreateTextarea,
} from './RecipeCreate.style';
import Dropdown from './Dropdown/Dropdown';
import Tag from './Tag/Tag';

const RecipeCreate = function RecipeCreate() {
  return (
    <Container>
      <CreateImg>Image</CreateImg>
      <CreateDetails>
        <CreateTitle>칵테일 이름</CreateTitle>
        <CreateInput />
        <CreateTitle>칵테일 베이스</CreateTitle>
        <Dropdown />
        <CreateTitle>태그</CreateTitle>
        <Tag />
        <CreateTitle>재료</CreateTitle>
        <CreateTextarea />
        <CreateTitle>만드는법</CreateTitle>
        <CreateTextarea />
      </CreateDetails>
    </Container>
  );
};

export default RecipeCreate;
