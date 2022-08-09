import React, { useState } from 'react';
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

  const [isWithdrawal, setIsWithdrawal] = useState(false);
  const tabManuName = ['작성글', '관심글'];
  const [preClickedTab, setPreClickedTab] = useState('');

  const userInfo: any = useSelector(userData);

  const [clickedMenuAllRecipes, setClickedMenuAllRecipes] = useState<any>([]);
  const [userMyPageView, setUserMyPageView] = useState<any>([]);
  const [pageNum, setPageNum]: Array<any> = useState([]);
  const [prePageNum, setPrePageNum] = useState('1');

  const isClickedTab = function (nowClickedTab: any) {
    nowClickedTab.target.style.background = '#f876de';
    nowClickedTab.target.style.color = '#ffffff';

    if (
      preClickedTab !== '' &&
      preClickedTab !== nowClickedTab.target.innerHTML
    ) {
      const preClickedTabMenu = document.getElementById(preClickedTab);
      preClickedTabMenu!.style.background = '#ffffff';
      preClickedTabMenu!.style.color = '#494949';
    }

    setPreClickedTab(nowClickedTab.target.innerHTML);
    makePageNumBtn(nowClickedTab.target.innerHTML);
    getClickedMenuResult(nowClickedTab.target.innerHTML);
  };

  const makePageNumBtn = function (myListName?: string) {
    let allRecipeResult: Array<any> = [];
    let tempCount = 0;

    if (myListName === '작성글') {
      allRecipeResult = userInfo.recipes;
    } else if (myListName === '관심글') {
      allRecipeResult = userInfo.likes;
    }

    if (allRecipeResult.length / 16) {
      tempCount = allRecipeResult.length / 16 + 1;
    } else {
      tempCount = allRecipeResult.length / 16;
    }

    const pageCount = Array.from({ length: tempCount }, (el, idx) => idx + 1);

    setPageNum([...pageCount]);
  };

  const setPageNumBtnStyling = function (e: any) {
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

  const getClickedMenuResult = function (myListName?: string) {
    let allRecipeResult: Array<any> = [];

    if (myListName === '작성글') {
      allRecipeResult = userInfo.recipes;
    } else if (myListName === '관심글') {
      allRecipeResult = userInfo.likes;
    }

    allRecipeResult.forEach((recipe: any) => {
      if (recipe.tags.length > 3) {
        recipe.tags = recipe.tags.splice(0, 3);
      }
    });

    setClickedMenuAllRecipes([...allRecipeResult]);
    makeRecipesPageNation([...allRecipeResult]);
  };

  const makeRecipesPageNation = function (allBookmarkRecipe: any, skipID = 0) {
    if (allBookmarkRecipe[skipID + 16]) {
      setUserMyPageView([...allBookmarkRecipe.slice(skipID, skipID + 16)]);
    } else if (allBookmarkRecipe[skipID + 16] === undefined) {
      setUserMyPageView([...allBookmarkRecipe.slice(skipID)]);
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
        {tabManuName.map((el: string) => {
          return (
            <TabMenu
              key={el}
              id={el}
              role="button"
              tabIndex={0}
              onClick={(e: any) => {
                isClickedTab(e);
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
      {clickedMenuAllRecipes.length ? (
        <RecipeLists2 nowRecipeListResult={userMyPageView} />
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
              onClick={(el: any) => {
                const newSkipID = userInfo.likes.indexOf(
                  userInfo.likes[(Number(el.target.innerHTML) - 1) * 16]
                );
                setPageNumBtnStyling(el);
                makeRecipesPageNation(clickedMenuAllRecipes, newSkipID);
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
