import React, { useState } from 'react';
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
  const [isLiked, setIsLiked] = useState(false);
  const clickedLikeBtn = () => {
    setIsLiked(!isLiked);
  };

  const [data, setData] = useState({
    image: '/defaultImg.png',
    name: '칵테일 이름',
    baseDrink: '칵테일 베이스 드링크',
    tag: [
      '태그1',
      '태그2',
      '태그3',
      '태그4',
      '태그5',
      '태그6',
      '태그7',
      '태그8',
      '태그9',
      '태그10',
      '태그12',
      '태그13',
    ],
    material: [
      '재료1',
      '재료2',
      '재료3',
      '재료4',
      '재료5',
      '재료6',
      '재료7',
      '재료8',
      '재료9',
      '재료10',
      '재료12',
      '재료13',
    ],
    capacity: [
      'oz',
      'ml',
      'cc',
      'oz',
      'ml',
      'cc',
      'oz',
      'ml',
      'cc',
      'oz',
      'ml',
      'cc',
      'oz',
    ],
    recipe:
      'What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
  });
  return (
    <Card>
      <CardImg src={data.image} />
      <CardDetails>
        <CardName>{data.name}</CardName>
        <CardLikes>
          {isLiked ? (
            <LikesImg src="/Like.png" onClick={clickedLikeBtn} />
          ) : (
            <LikesImg src="/unLike.png" onClick={clickedLikeBtn} />
          )}
          <LikesNum>5</LikesNum>
        </CardLikes>
      </CardDetails>
      <CardTags>
        <CardTag># {data.tag[0]}</CardTag>
        <CardTag># {data.tag[1]}</CardTag>
        <CardTag># {data.tag[2]}</CardTag>
      </CardTags>
    </Card>
  );
};

export default RecipeCard;
