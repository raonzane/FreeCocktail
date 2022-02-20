import React, { useState } from 'react';
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
  const [isList, setIsList] = useState<boolean>(true);
  const chagneScreen = () => {
    setIsList(!isList);
  };

  return (
    <Container>
      <div> Header</div>
      <Body>
        <SearchArea>SearchArea</SearchArea>

        <CreateArea>
          <CreateBtn onClick={chagneScreen}>+</CreateBtn>
        </CreateArea>

        <CardArea>{isList ? <RecipeCard /> : <RecipeCreate />}</CardArea>
      </Body>
    </Container>
  );
};

export default RecipeList;
