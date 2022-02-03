import React from 'react';
import RecipeCard from 'Components/RecipeCard/RecipeCard';
import RecipeCreate from 'Components/RecipeCreate/RecipeCreate';
import {
  Container,
  Body,
  SearchArea,
  CreateArea,
  CreateBtn,
  CardArea,
} from './RecipeList.style';

const RecipeList = function RecipeList() {
  return (
    <Container>
      <div> Header</div>
      <Body>
        <SearchArea>SearchArea</SearchArea>

        <CreateArea>
          <CreateBtn>+</CreateBtn>
        </CreateArea>

        <CardArea>
          <RecipeCard />
          <RecipeCreate />
        </CardArea>
      </Body>
    </Container>
  );
};

export default RecipeList;
