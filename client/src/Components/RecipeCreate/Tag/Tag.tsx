import React, { useState } from 'react';
import {
  Container,
  TagsInput,
  EnteredTags,
  EnteredTag,
  XBtn,
} from './Tag.style';

const Tag = function Tag() {
  const [tags, setTags] = useState<string[]>([]);

  const enterTag = (e: any) => {
    if (e.key === 'Enter') {
      if (tags.includes(e.target.value)) {
        alert('이미 추가된 태그입니다.');
        e.target.value = null;
      } else {
        setTags([...tags, e.target.value]);
        e.target.value = null;
      }
    }
  };

  const removeTag = (key: string) => {
    setTags(tags.filter((el) => el !== key));
  };

  return (
    <Container>
      <TagsInput placeholder="Press enter to add tags" onKeyUp={enterTag} />
      <EnteredTags>
        {tags.map((el: string) => (
          <EnteredTag key={el}>
            #{el}
            <XBtn onClick={() => removeTag(el)}>x</XBtn>
          </EnteredTag>
        ))}
      </EnteredTags>
    </Container>
  );
};

export default Tag;
