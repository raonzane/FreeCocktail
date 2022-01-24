import React from 'react';
import styled from 'styled-components';

const RecipeCard = function RecipeCard() {
  return (
    <div>
      <Card>
        <CardImg src="/개구리.png" />
        <hr />
        <CardDetails>
          <CardName>Cocktail Name</CardName>
          <CardLikes>
            <LikesImg src="/Like.png" />
            <LikesNum>Count</LikesNum>
          </CardLikes>
        </CardDetails>
        <CardTags>
          <CardTag>#Tag1</CardTag>
          <CardTag>#Tag2</CardTag>
          <CardTag>#Tag3</CardTag>
        </CardTags>
      </Card>
    </div>
  );
};

const Card = styled.div`
  border: 1px solid #000;
  border-radius: 0.3rem;
  padding: 0.5rem;
`;

const CardImg = styled.img`
  width: 12rem;
  height: 14rem;
  cursor: pointer;
`;

const CardDetails = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 0.5rem;
`;

const CardName = styled.div`
  font-size: 1.2rem;
`;

const CardLikes = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  gap: 0.15rem;
`;

const LikesImg = styled.img`
  width: 1rem;
  height: 1rem;
`;
const LikesNum = styled.div`
  height: 1rem;
  color: #000;
`;

const CardTags = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const CardTag = styled.div`
  border: 1px solid #000;
  border-radius: 0.3rem;
  padding: 0.1rem;
`;

export default RecipeCard;
