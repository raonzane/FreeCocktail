import React from 'react';
import styled from 'styled-components';
import { TopBtnSection, TopBtn } from './TopButton.style';

const TopButton = function (): any {
  const moveToTheTop = function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollFunc = function () {
    const topBtn = document.getElementById('topbtn');
    const { scrollHeight } = document.documentElement;
    const { scrollTop } = document.documentElement;

    if (scrollHeight / 4 >= scrollTop) {
      topBtn!.style.display = 'none';
    } else if (scrollHeight / 4 < scrollTop) {
      topBtn!.style.display = 'block';
    }
  };

  window.addEventListener('scroll', scrollFunc);

  return (
    <TopBtnSection id="topbtn">
      <TopBtn
        onClick={() => {
          moveToTheTop();
        }}
      >
        ▲{'\n'}맨위로
      </TopBtn>
    </TopBtnSection>
  );
};

export default TopButton;
