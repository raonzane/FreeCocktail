import React from 'react';
import styled from 'styled-components';
import RecipeCard from 'Components/RecipeCard';

const RecipeList = function RecipeList() {
  return (
    <div>
      <div> RecipeList</div>
      <CardArea>
        <RecipeCard />
      </CardArea>
    </div>
  );
};

const CardArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20%;
`;

export default RecipeList;
