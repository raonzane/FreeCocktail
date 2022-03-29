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
  //* 표시될 레시피 데이터 상태관리
  const [data, setData] = useState({
    image: '/defaultImg.png',
    name: '칵테일 이름',
    baseDrink: '칵테일 베이스 드링크',
    tag: ['태그1', '태그2', '태그3'],
    ingredient: ['재료1', '재료2', '재료3'],
    measure: ['oz', 'ml', 'cc'],
    instructions:
      'What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
  });

  //* 표시될 레시피 데이터를 서버로 받아서 상태로 저장
  useEffect(() => {
    //! --- 무한스크롤 구현 후 클릭한 레시피카드 id 받아오기 구현 예정
    const recipeId = 1;
    axios.get(`http://localhost:3001/recipe/${recipeId}`).then((res) => {
      setData({
        image: res.data.data.image,
        name: res.data.data.name,
        baseDrink: res.data.data.baseDrink,
        tag: res.data.data.tags,
        ingredient: res.data.data.Ingredient,
        measure: res.data.data.measure,
        instructions: res.data.data.Instructions,
      });
    });
  }, []);

  //* 좋아요 버튼 상태관리
  const [isLiked, setIsLiked] = useState(false);
  const clickedLikeBtn = () => {
    setIsLiked(!isLiked);
  };

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
        <div>
          {data.tag.map((el) => (
            <Tag key={el}># {el}</Tag>
          ))}
        </div>

        <Title>재료</Title>
        {data.ingredient.map((el, idx) => (
          <Ingredient key={el}>{`${el}: ${data.measure[idx]}`}</Ingredient>
        ))}

        <Title>만드는 방법</Title>
        <Instruction>{data.instructions} </Instruction>
      </RecipeData>
    </Container>
  );
};

export default RecipeClicked;
