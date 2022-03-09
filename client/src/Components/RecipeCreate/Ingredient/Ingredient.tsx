import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { recipeData, addRecipe } from '../../../_slices/recipeSlice';

import {
  Container,
  Title,
  InputArea,
  IngredientArea,
  Ingredients,
  MeasureArea,
  Measure,
  CenterArea,
  PMBtn,
} from './Ingredient.style';

const Ingredient = function Ingredient() {
  const data = useSelector(recipeData);
  const dispatch = useDispatch();

  //* +, - 버튼에 다른 input 추가/제거
  const [inputs, setInputs] = useState<number[]>([0]);
  const controlInput = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (e.currentTarget.value === '+') {
      setInputs([...inputs, inputs.length]);
    } else if (e.currentTarget.value === '-') {
      setInputs(inputs.slice(0, inputs.length - 1));
      setTempIng(tempIng.slice(0, tempIng.length - 1));
      setTempMea(tempMea.slice(0, tempMea.length - 1));
    }
  };

  //* ingredient 임시저장
  const [tempIng, setTempIng] = useState([{ id: 0, ing: '' }]);
  const pushIng = (idx: number, ingredient: string) => {
    if (tempIng.filter((el) => el.id === idx).length) {
      setTempIng(
        tempIng.map((el) => (el.id === idx ? { id: idx, ing: ingredient } : el))
      );
    } else {
      setTempIng([...tempIng, { id: idx, ing: ingredient }]);
    }
  };

  //* capacity 임시저장
  const [tempMea, setTempMea] = useState([{ id: 0, mea: '' }]);
  const pushMea = (idx: number, measure: string) => {
    if (tempMea.filter((el) => el.id === idx).length) {
      setTempMea(
        tempMea.map((el) => (el.id === idx ? { id: idx, mea: measure } : el))
      );
    } else {
      setTempMea([...tempMea, { id: idx, mea: measure }]);
    }
  };

  useEffect(() => {
    const transfor = async () => {
      const resultIng = await tempIng.map((el) => el.ing);
      const resultMea = await tempMea.map((el) => el.mea);
      dispatch(
        addRecipe({
          ...data,
          ingredient: resultIng,
          measure: resultMea,
        })
      );
    };

    transfor();
  }, [tempIng, tempMea]);

  return (
    <Container>
      <InputArea>
        <IngredientArea>
          <Title>재료</Title>
          {inputs &&
            inputs.map((idx) => (
              <Ingredients
                key={idx}
                onBlur={(e) => {
                  pushIng(idx, e.target.value);
                }}
              />
            ))}
        </IngredientArea>
        <MeasureArea>
          <Title>용량</Title>
          {inputs &&
            inputs.map((idx) => (
              <Measure
                key={idx}
                onBlur={(e) => {
                  pushMea(idx, e.target.value);
                }}
              />
            ))}
        </MeasureArea>
      </InputArea>

      <CenterArea>
        <PMBtn value="+" onClick={(e) => controlInput(e)}>
          +
        </PMBtn>
        {inputs.length > 1 && (
          <PMBtn value="-" onClick={(e) => controlInput(e)}>
            -
          </PMBtn>
        )}
      </CenterArea>
    </Container>
  );
};

export default Ingredient;
