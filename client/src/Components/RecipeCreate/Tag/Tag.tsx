import React, { useState } from 'react';
import { Container, TagsInput } from './Tag.style';

const Tag = function Tag() {
  const initialTags = ['CodeStates', 'kimcoding'];

  const [tags, setTags] = useState(initialTags);
  const removeTags = (indexToRemove: any) => {
    setTags(tags.filter((ele) => ele !== tags[indexToRemove]));
  };

  const addTags = (event: any) => {
    if (event.code === 'Enter') {
      if (!tags.includes(event.target.value)) {
        setTags([...tags, event.target.value]);
        event.target.value = '';
      }
    }
  };

  return (
    <Container>
      <TagsInput>
        <ul id="tags">
          {tags.map((tag, index) => (
            <li key={index} className="tag">
              <span className="tag-title">{tag}</span>
              <span
                className="tag-close-icon"
                onClick={() => removeTags(index)}
              >
                x
              </span>
            </li>
          ))}
        </ul>
        <input
          className="tag-input"
          type="text"
          onKeyUp={(event) => {
            {
              addTags(event);
            }
          }}
          placeholder="Press enter to add tags"
        />
      </TagsInput>
    </Container>
  );
};

export default Tag;
