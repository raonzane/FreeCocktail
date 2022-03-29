import React, { useState, useEffect } from 'react';
import axios from 'axios';

import {
  Container,
  TitleWrapper,
  Title,
  Content,
  ContentTitle,
  Ul,
  Li,
} from './Withdrawal.style';

const Withdrawal = function Withdrawal() {
  return (
    <Container>
      <TitleWrapper>
        <Title>회원탈퇴</Title>
      </TitleWrapper>
      <Content>
        <ContentTitle>탈퇴 시 주의 사항</ContentTitle>
        <Ul>
          <Li>
            탈퇴 시 회원님의 계정에 저장된 모든 정보가 영구적으로 삭제되며,
            다시는 복구할 수 없습니다.
          </Li>
        </Ul>
      </Content>
    </Container>
  );
};

export default Withdrawal;
