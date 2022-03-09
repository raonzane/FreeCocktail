import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { recipeData, addRecipe } from '../../../_slices/recipeSlice';

import { Container, Title, Textarea } from './Instruction.style';

const Instruction = function Instruction() {
  const data = useSelector(recipeData);
  const dispatch = useDispatch();

  return (
    <Container>
      <Title>만드는 법</Title>
      <Textarea
        onChange={(e) => {
          dispatch(
            addRecipe({
              ...data,
              instructions: e.target.value,
            })
          );
        }}
      />
    </Container>
  );
};

export default Instruction;
