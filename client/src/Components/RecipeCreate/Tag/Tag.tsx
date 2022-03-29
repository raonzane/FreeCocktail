import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { recipeData, addRecipe } from '../../../_slices/recipeSlice';
import {
  Container,
  Title,
  TagsInput,
  EnteredTags,
  EnteredTag,
  XBtn,
} from './Tag.style';

const Tag = function Tag() {
  const [tag, setTag] = useState<string[]>([]);

  const enterTag = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      if (tag.includes(e.currentTarget.value)) {
        alert('이미 추가된 태그입니다.');
        e.currentTarget.value = '';
      } else {
        setTag([...tag, e.currentTarget.value]);
        e.currentTarget.value = '';
      }
    }
  };

  const removeTag = (key: string) => {
    setTag(tag.filter((el) => el !== key));
  };

  const data = useSelector(recipeData);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      addRecipe({
        ...data,
        tags: tag,
      })
    );
  }, [tag]);

  return (
    <Container>
      <Title>태그</Title>
      <TagsInput
        placeholder="Press enter to add tags"
        onKeyUp={(e) => enterTag(e)}
      />
      <EnteredTags>
        {tag.map((el: string) => (
          <EnteredTag key={el}>
            # {el}
            <XBtn onClick={() => removeTag(el)}>x</XBtn>
          </EnteredTag>
        ))}
      </EnteredTags>
    </Container>
  );
};

export default Tag;
