import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { recipeData, addRecipe } from '../../../_slices/recipeSlice';

import { Container, Title, Input } from './Name.style';

const Name = function Name() {
  const data = useSelector(recipeData);
  const dispatch = useDispatch();

  return (
    <Container>
      <Title>칵테일 이름</Title>
      <Input
        onChange={(e) => {
          dispatch(
            addRecipe({
              ...data,
              name: e.target.value,
            })
          );
        }}
      />
    </Container>
  );
};

export default Name;
