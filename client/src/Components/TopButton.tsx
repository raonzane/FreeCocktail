import React from 'react';
import styled from 'styled-components';
import { TopBtnSection, TopBtn } from './TopButton.style';

const TopButton = function (): any {
  const moveToTheTop = function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <TopBtnSection>
      <TopBtn
        onClick={() => {
          moveToTheTop();
        }}
      >
        up
      </TopBtn>
    </TopBtnSection>
  );
};

export default TopButton;
