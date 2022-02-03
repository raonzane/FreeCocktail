import React from 'react';
import {
  Card,
  CardImg,
  CardDetails,
  CardName,
  CardLikes,
  LikesImg,
  LikesNum,
  CardTags,
  CardTag,
} from './RecipeCard.style';

const RecipeCard = function RecipeCard() {
  return (
    <Card>
      <CardImg>Image</CardImg>
      <CardDetails>
        <CardName>Cocktail Name</CardName>
        <CardLikes>
          <LikesImg src="/Like.png" />
          <LikesNum>5</LikesNum>
        </CardLikes>
      </CardDetails>
      <CardTags>
        <CardTag>#Tag1</CardTag>
        <CardTag>#Tag2</CardTag>
        <CardTag>#Tag3</CardTag>
      </CardTags>
    </Card>
  );
};

export default RecipeCard;
