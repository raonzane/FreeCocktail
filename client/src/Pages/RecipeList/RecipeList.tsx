import React, { useState } from 'react';
import RecipeCard from 'Components/RecipeCard/RecipeCard';
import RecipeClicked from 'Components/RecipeClicked/RecipeClicked';
import RecipeCreate from 'Components/RecipeCreate/RecipeCreate';
import {
  Container,
  CreateArea,
  CreateBtn,
  CardArea,
  BackBtn,
} from './RecipeList.style';

const RecipeList = function RecipeList() {
  const [isBtnClicked, setIsBtnClicked] = useState<boolean>(false);
  const clickedBtn = () => {
    setIsBtnClicked(!isBtnClicked);
  };

  const [isCardClicked, setIsCardClicked] = useState<boolean>(false);
  return (
    <Container>
      <CreateArea>
        <CreateBtn onClick={clickedBtn}>+</CreateBtn>
      </CreateArea>

      <CardArea>
        {isCardClicked && !isBtnClicked ? (
          <BackBtn
            onClick={() => setIsCardClicked(!isCardClicked)}
            aria-hidden="true"
          >
            {'<<< 리스트로 돌아가기'}
          </BackBtn>
        ) : (
          <br />
        )}
        {isBtnClicked ? (
          <RecipeCreate />
        ) : (
          !isBtnClicked &&
          (isCardClicked ? (
            <RecipeClicked />
          ) : (
            <div
              onClick={() => setIsCardClicked(!isCardClicked)}
              aria-hidden="true"
            >
              <RecipeCard />
            </div>
          ))
        )}
      </CardArea>
    </Container>
  );
};

export default RecipeList;
