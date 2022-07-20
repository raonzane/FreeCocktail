import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './MyPage.style.ts';
import { useSelector } from 'react-redux';
import RecipeLists2 from 'Components/RecipeLists/RecipeLists';
import Modal from '../../Components/_Modal/Modal';
import Withdrawal from '../../Components/Withdrawal/Withdrawal';
import {
  Body,
  UserProfileContainer,
  UserImg,
  UserInfoEdit,
  UserInfoGreeting,
  UserInfoButtons,
  UserInfoEditButton,
  SignOutButton,
  Tab,
  TabMenu,
  PageButtonSection,
  PageButton,
} from './MyPage.style';
import { store } from '../../_store/store';
import { userData } from '../../_slices/userSlice';

const MyPage = function MyPage() {
  // console.log('마이 페이지에서 확인한 state', store.getState());

  useEffect(() => {
    getMypageRecipeList(tapMenuName[0]);
  }, []);

  const [isWithdrawal, setIsWithdrawal] = useState(false);
  const [checkMyList, setCheckMyList] = useState('작성글');

  const userInfo: any = useSelector(userData);

  const [allBookmarkRecipes, setAllBookmarkRecipe] = useState<any>([]);
  const tapMenuName = ['작성글', '관심글'];
  const [myBookmarkList, setMyBookmarkList] = useState<any>([]);
  const [pageNum, setPageNum]: Array<any> = useState([]);
  const [bookmarkSkipID, setBookmarkSkipID] = useState(0);
  const [prePageNum, setPrePageNum] = useState('1');

  const setTabMenu = function (clickedMenu: any) {
    clickedMenu.target.style.background = '#f876de';
    clickedMenu.target.style.color = '#ffffff';

    const prePickedMenu = document.getElementById(checkMyList);

    if (checkMyList !== clickedMenu.target.innerHTML) {
      prePickedMenu!.style.background = '#ffffff';
      prePickedMenu!.style.color = '#494949';
    }

    makePageButton(clickedMenu.target.innerHTML);
    setCheckMyList(clickedMenu.target.innerHTML);
    getMypageRecipeList(clickedMenu.target.innerHTML);
  };

  const getMypageRecipeList = function (myListName?: string) {
    let allRecipeResult: Array<any> = [];

    if (myListName === '작성글') {
      allRecipeResult = userInfo.recipes;
    } else if (myListName === '관심글') {
      allRecipeResult = userInfo.likes;
    }

    allRecipeResult.forEach((el: any) => {
      if (el.tags.length >= 3) {
        el.tags = el.tags.splice(0, 3);
      }
    });

    setAllBookmarkRecipe([...allRecipeResult]);
    getMyBookmarkList([...allRecipeResult]);
  };

  const makePageButton = function (myListName?: string) {
    // ! 버튼 갯수

    let number = 0;
    const tempNumArr = [];
    let allRecipeResult: Array<any> = [];

    if (myListName === '작성글') {
      allRecipeResult = userInfo.recipes;
    } else if (myListName === '관심글') {
      allRecipeResult = userInfo.likes;
    }

    if (allRecipeResult.length / 16) {
      number = allRecipeResult.length / 16 + 1;
    } else {
      number = allRecipeResult.length / 16;
    }
    for (let i = 1; i <= number; i += 1) {
      tempNumArr.push(i);
    }

    setPageNum([...tempNumArr]);
    return pageNum;
  };

  // ! 버튼 UI
  const setPageButton = function (e: any) {
    const nowPageNum = e.target;

    if (prePageNum !== nowPageNum) {
      const prePageNumBtn = document.getElementById(prePageNum);
      prePageNumBtn!.style.background = '#ffffff';
      prePageNumBtn!.style.color = '#494949';
      setPrePageNum(nowPageNum.innerHTML);
    }

    nowPageNum.style.background = '#f876de';
    nowPageNum.style.color = '#ffffff';
  };

  //! 숫자 onMouseEnter시 실행되는 함수
  const makeSkipID = function (e: any) {
    const newSkipID = userInfo.likes.indexOf(
      userInfo.likes[(Number(e.target.innerHTML) - 1) * 16]
    );

    setBookmarkSkipID(newSkipID);
  };

  // ! 숫자 버튼 onClick에서 작동하는 함수
  const getMyBookmarkList = function (allBookmarkRecipe?: any) {
    console.log('allBookmarkRecipe', allBookmarkRecipe);

    if (allBookmarkRecipe[bookmarkSkipID + 16]) {
      setMyBookmarkList([
        ...allBookmarkRecipe.slice(bookmarkSkipID, bookmarkSkipID + 16),
      ]);
    } else if (allBookmarkRecipe[bookmarkSkipID + 16] === undefined) {
      setMyBookmarkList([...allBookmarkRecipe.slice(bookmarkSkipID)]);
    }
  };

  return (
    <Body>
      <UserProfileContainer>
        <UserImg />
        <UserInfoEdit>
          <UserInfoGreeting>
            {userInfo.nickname ? userInfo.nickname : '안녕하세요 사용자'}
            님, 반갑습니다!
          </UserInfoGreeting>
          <UserInfoButtons>
            <UserInfoEditButton>회원 정보 수정</UserInfoEditButton>
            <SignOutButton
              onClick={() => {
                setIsWithdrawal(true);
              }}
              aria-hidden="true"
            >
              회원 탈퇴 하기
            </SignOutButton>
            {isWithdrawal && (
              <Modal data={<Withdrawal />} close={setIsWithdrawal} />
            )}
          </UserInfoButtons>
        </UserInfoEdit>
      </UserProfileContainer>
      <Tab>
        {tapMenuName.map((el: string) => {
          return (
            <TabMenu
              key={el}
              style={
                el === '작성글'
                  ? { background: '#f876de', color: '#ffffff' }
                  : { background: '#ffffff' }
              }
              id={el}
              role="button"
              tabIndex={0}
              onClick={(e: any) => {
                setTabMenu(e);
              }}
              onKeyDown={(): void => {
                console.log();
              }}
            >
              {el}
            </TabMenu>
          );
        })}
      </Tab>
      {allBookmarkRecipes.length ? (
        <RecipeLists2 nowRecipeListResult={myBookmarkList} />
      ) : (
        '레시피 정보가 없습니다.'
      )}

      <PageButtonSection>
        {pageNum.map((el: number) => {
          return (
            <PageButton
              id={String(el)}
              key={el}
              style={
                el === 1
                  ? { background: '#f876de', color: '#ffffff' }
                  : { background: '#ffffff' }
              }
              onMouseEnter={(el: number) => {
                makeSkipID(el);
              }}
              onClick={(el: number) => {
                setPageButton(el);
                getMyBookmarkList(allBookmarkRecipes);
              }}
            >
              {el}
            </PageButton>
          );
        })}
      </PageButtonSection>
    </Body>

    // <svg
    //   viewBox="0 0 100 100"
    //   preserveAspectRatio="xMidYMid slice"
    //   id="mypage-svg"
    // >
    //   <defs>
    //     <radialGradient
    //       id="Gradient1"
    //       cx="50%"
    //       cy="50%"
    //       fx="10%"
    //       fy="50%"
    //       r=".5"
    //     >
    //       <animate
    //         attributeName="fx"
    //         dur="34s"
    //         values="0%;3%;0%"
    //         repeatCount="indefinite"
    //       />
    //       <stop offset="0%" stopColor="#ff0" />
    //       <stop offset="100%" stopColor="#ff00" />
    //     </radialGradient>
    //     <radialGradient
    //       id="Gradient2"
    //       cx="50%"
    //       cy="50%"
    //       fx="10%"
    //       fy="50%"
    //       r=".5"
    //     >
    //       <animate
    //         attributeName="fx"
    //         dur="23.5s"
    //         values="0%;3%;0%"
    //         repeatCount="indefinite"
    //       />
    //       <stop offset="0%" stopColor="#0ff" />
    //       <stop offset="100%" stopColor="#0ff0" />
    //     </radialGradient>
    //     <radialGradient
    //       id="Gradient3"
    //       cx="50%"
    //       cy="50%"
    //       fx="50%"
    //       fy="50%"
    //       r=".5"
    //     >
    //       <animate
    //         attributeName="fx"
    //         dur="21.5s"
    //         values="0%;3%;0%"
    //         repeatCount="indefinite"
    //       />
    //       <stop offset="0%" stopColor="#f0f" />
    //       <stop offset="100%" stopColor="#f0f0" />
    //     </radialGradient>
    //   </defs>
    //   <rect x="0" y="0" width="100%" height="100%" fill="url(#Gradient1)">
    //     <animate
    //       attributeName="x"
    //       dur="20s"
    //       values="25%;0%;25%"
    //       repeatCount="indefinite"
    //     />
    //     <animate
    //       attributeName="y"
    //       dur="21s"
    //       values="0%;25%;0%"
    //       repeatCount="indefinite"
    //     />
    //     <animateTransform
    //       attributeName="transform"
    //       type="rotate"
    //       from="0 50 50"
    //       to="360 50 50"
    //       dur="17s"
    //       repeatCount="indefinite"
    //     />
    //   </rect>
    //   <rect x="0" y="0" width="100%" height="100%" fill="url(#Gradient2)">
    //     <animate
    //       attributeName="x"
    //       dur="23s"
    //       values="-25%;0%;-25%"
    //       repeatCount="indefinite"
    //     />
    //     <animate
    //       attributeName="y"
    //       dur="24s"
    //       values="0%;50%;0%"
    //       repeatCount="indefinite"
    //     />
    //     <animateTransform
    //       attributeName="transform"
    //       type="rotate"
    //       from="0 50 50"
    //       to="360 50 50"
    //       dur="18s"
    //       repeatCount="indefinite"
    //     />
    //   </rect>
    //   <rect x="0" y="0" width="100%" height="100%" fill="url(#Gradient3)">
    //     <animate
    //       attributeName="x"
    //       dur="25s"
    //       values="0%;25%;0%"
    //       repeatCount="indefinite"
    //     />
    //     <animate
    //       attributeName="y"
    //       dur="26s"
    //       values="0%;25%;0%"
    //       repeatCount="indefinite"
    //     />
    //     <animateTransform
    //       attributeName="transform"
    //       type="rotate"
    //       from="360 50 50"
    //       to="0 50 50"
    //       dur="19s"
    //       repeatCount="indefinite"
    //     />
    //   </rect>
    // </svg>
  );
};

export default MyPage;
