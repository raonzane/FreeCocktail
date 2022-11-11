import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { userData, logout } from '_slices/userSlice';
import axios from 'axios';

import {
  Container,
  TitleWrapper,
  Title,
  ContentWrapper,
  ContentTitle,
  Content,
  Label,
  Checkbox,
  ButtonWrapper,
  Button,
} from './Withdrawal.style';

const Withdrawal = function Withdrawal() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userInfo: any = useSelector(userData);
  const [isAgreed, setIsAgreed] = useState(false);

  //* 회원 탙퇴 요청
  const ButtonClicked = () => {
    if (isAgreed) {
      axios
        .delete(`${process.env.REACT_APP_SERVER}user/${userInfo.email}`)
        .then((res) => {
          console.log(res);
          alert(`회원 탈퇴를 완료했습니다.
서비스를 이용해 주셔서 감사합니다.`);
          dispatch(logout());
          // navigate('/');
        });
    } else if (!isAgreed) {
      alert('주의사항에 동의한 후 회원 탈퇴가 가능합니다!');
    }
  };
  return (
    <Container>
      <TitleWrapper>
        <Title>회원 탈퇴</Title>
      </TitleWrapper>

      <ContentWrapper>
        <ContentTitle>회원 탈퇴 시 주의사항</ContentTitle>

        <Content>
          회원님의 계정에 저장된 모든 정보가 영구적으로 삭제되며, 다시는 복구할
          수 없습니다.
        </Content>
        <Content>
          회원님이 작성한 레시피에 대해 더 이상 수정을 할 수 없습니다.
        </Content>
      </ContentWrapper>

      <Label>
        <Checkbox
          type="checkbox"
          onClick={() => {
            setIsAgreed(!isAgreed);
          }}
        />
        [필수] 주의사항 확인 후, 이에 동의합니다.
      </Label>

      <ButtonWrapper>
        <Button onClick={ButtonClicked}>회원 탈퇴</Button>
      </ButtonWrapper>
    </Container>
  );
};

export default Withdrawal;
