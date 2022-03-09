import React, { useState, useEffect } from 'react';
import axios from 'axios';

import {
  Container,
  RecipeData,
  Img,
  NameArea,
  Name,
  LikesImgArea,
  LikesImg,
  Title,
  Content,
  Tag,
  Ingredient,
  Instruction,
} from './RecipeClicked.style';

const RecipeClicked = function RecipeClicked() {
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
    ingredient: [
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
    measure: [
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
    instructions:
      'What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
  });

  const [isLiked, setIsLiked] = useState(false);
  const clickedLikeBtn = () => {
    setIsLiked(!isLiked);
  };

  useEffect(() => {
    axios.get('url').then((res) => setData({ ...res.data.data }));
  }, []);

  return (
    <Container>
      <Img src={data.image} />
      <RecipeData>
        <NameArea>
          <Name>{data.name}</Name>
          <LikesImgArea>
            {isLiked ? (
              <LikesImg src="/Like.png" onClick={clickedLikeBtn} />
            ) : (
              <LikesImg src="/unLike.png" onClick={clickedLikeBtn} />
            )}
          </LikesImgArea>
        </NameArea>

        <Title>베이스 드링크</Title>
        <Content>{data.baseDrink}</Content>

        <Title>태그</Title>
        {data.tag.map((el) => (
          <Tag key={el}># {el}</Tag>
        ))}

        <Title>재료</Title>
        {data.ingredient.map((el, idx) => (
          <Ingredient key={el}>{el + data.measure[idx]}</Ingredient>
        ))}

        <Title>만드는 방법</Title>
        <Instruction>{data.instructions} </Instruction>
      </RecipeData>
    </Container>
  );
};

export default RecipeClicked;
