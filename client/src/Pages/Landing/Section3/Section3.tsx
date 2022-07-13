import React, { useState } from 'react';
import LeftArrow from '@mui/icons-material/ArrowBackIosNew';
import RightArrow from '@mui/icons-material/ArrowForwardIos';
import { Container, ArrowArea, Wrapper } from './Section3.style';

const Section3 = function Section3() {
  //* 슬라이드 상태관리
  //! content.content에 이미지 추가 예정
  const [content, setContent] = useState({
    contentIdx: 0,
    content: ['first content', 'second content', 'third content'],
  });

  const RightArrowHandler = () => {
    if (content.contentIdx < content.content.length - 1) {
      setContent({ ...content, contentIdx: content.contentIdx + 1 });
    } else {
      setContent({ ...content, contentIdx: 0 });
    }
  };
  const LeftArrowHandler = () => {
    if (content.contentIdx < 1) {
      setContent({ ...content, contentIdx: 2 });
    } else {
      setContent({ ...content, contentIdx: content.contentIdx - 1 });
    }
  };

  return (
    <Container>
      {/* 이전 슬라이드 화살표 */}
      <ArrowArea onClick={LeftArrowHandler}>
        <LeftArrow />
      </ArrowArea>

      {/* 슬라이드 내용 */}
      {content.contentIdx === 0 && <Wrapper>{content.content[0]}</Wrapper>}

      {content.contentIdx === 1 && <Wrapper>{content.content[1]}</Wrapper>}

      {content.contentIdx === 2 && <Wrapper>{content.content[2]}</Wrapper>}

      {/* 다음 슬라이드 화살표 */}
      <ArrowArea onClick={RightArrowHandler}>
        <RightArrow />
      </ArrowArea>
    </Container>
  );
};

export default Section3;
