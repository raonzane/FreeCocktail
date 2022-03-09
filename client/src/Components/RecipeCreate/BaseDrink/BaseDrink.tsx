import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { recipeData, addRecipe } from '../../../_slices/recipeSlice';

import { Container, Title, Select, Option } from './BaseDrink.style';

const BaseDrink = function BaseDrink() {
  const data = useSelector(recipeData);
  const dispatch = useDispatch();

  return (
    <Container>
      <Title>칵테일 베이스</Title>
      <Select
        onChange={(e) => {
          dispatch(
            addRecipe({
              ...data,
              baseDrink: e.target.value,
            })
          );
        }}
      >
        <Option value="">칵테일 베이스</Option>
        <Option value="Champagne">Champagne</Option>
        <Option value="Cognac">Cognac</Option>
        <Option value="Gin">Gin</Option>
        <Option value="Rum">Rum</Option>
        <Option value="Tequila">Tequila</Option>
        <Option value="Vodka">Vodka</Option>
        <Option value="Whisky">Whisky</Option>
        <Option value="Other">Other</Option>
      </Select>
    </Container>
  );
};

export default BaseDrink;
