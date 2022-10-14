import React, { useState, useEffect } from 'react';
import './MyPage.style.ts';
import { useSelector } from 'react-redux';
import RecipeLists2 from 'Components/RecipeLists/RecipeLists';
import { RecipeCard } from '../../types/types';
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

  const tabManuName = ['작성글', '관심글'];
  const userInfo: any = useSelector(userData);
  const [pageNum, setPageNum]: Array<any> = useState([]);
  const [pageDivision, setPageDivision] = useState({
    divisionNum: 1,
    type: '',
  });
  const [preClickedTab, setPreClickedTab] = useState('');
  const [isWithdrawal, setIsWithdrawal] = useState(false);
  const [clickedMyList, setClickedMyList] = useState<Array<RecipeCard>>([]);
  const [userMyPageView, setUserMyPageView] = useState<Array<RecipeCard>>([]);

  useEffect(() => {
    makePagenationBtnStyling('angle');
  }, [pageDivision]);

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
    makePagenationBtnStyling('angle');
    getClickedMenuResult(nowClickedTab.target.innerHTML);
  };

  const getClickedMenuResult = function (myListName?: string) {
    let allRecipeResult: Array<RecipeCard> = [];

    if (myListName === '작성글') {
      allRecipeResult = userInfo.recipes;
    } else if (myListName === '관심글') {
      allRecipeResult = userInfo.likes;
    }

    setClickedMyList([...allRecipeResult]);
    makeRecipesPageNation([...allRecipeResult]);
  };

  const makePageNumBtn = function (myListName: string, angleType = '') {
    let allRecipeResult: Array<any> = [];

    if (myListName === '작성글') {
      allRecipeResult = userInfo.recipes;
    } else if (myListName === '관심글') {
      allRecipeResult = userInfo.likes;
    }

    const pageBtnLength = Math.ceil(allRecipeResult.length / 16);
    const pageBtn: Array<number> = [];
    const tempDivision = pageDivision;

    if (angleType === '<<') {
      tempDivision.divisionNum = 1;
      tempDivision.type = '<<';
    } else if (angleType === '<') {
      tempDivision.divisionNum -= 1;
      tempDivision.type = '<';
    } else if (angleType === '>') {
      tempDivision.divisionNum += 1;
      tempDivision.type = '>';
    } else if (angleType === '>>') {
      tempDivision.divisionNum = Math.ceil(pageBtnLength / 5);
      tempDivision.type = '>>';
    }

    for (let i = 1; i <= pageBtnLength; i += 1) {
      if (
        tempDivision.divisionNum * 5 - (5 - i) <=
          tempDivision.divisionNum * 5 &&
        tempDivision.divisionNum * 5 - (5 - i) <= pageBtnLength
      ) {
        pageBtn.push(tempDivision.divisionNum * 5 - (5 - i));
      }
    }

    setPageNum([...pageBtn]);
    setPageDivision({ ...tempDivision });
  };

  const makePagenationBtnStyling = function (uiType: string, e?: any) {
    const allPageantionBtn: NodeListOf<HTMLElement> =
      document.querySelectorAll('.selected');

    if (allPageantionBtn !== null && allPageantionBtn !== undefined) {
      for (let i = 0; i < allPageantionBtn.length; i += 1) {
        allPageantionBtn[i].style.background = '#ffffff';
        allPageantionBtn[i].style.color = '#494949';
      }

      if (uiType === 'num') {
        const nowPageNum = e.target;
        nowPageNum.style.background = '#f876de';
        nowPageNum.style.color = '#ffffff';
      } else if (uiType === 'angle') {
        const firstElement = document.getElementById(
          `${pageNum[0]}`
        ) as HTMLElement;

        const lastElement = document.getElementById(
          `${pageNum[1]}`
        ) as HTMLElement;

        if (firstElement !== null && lastElement !== null) {
          if (pageDivision.type === '>>') {
            lastElement.style.backgroundColor = '#f876de';
            lastElement.style.color = '#ffffff';
          } else {
            firstElement.style.backgroundColor = '#f876de';
            firstElement.style.color = '#ffffff';
          }
        }
      }
    }
  };

  const makeRecipesPageNation = function (
    allBookmarkRecipe: Array<RecipeCard>,
    skipID = 0
  ) {
    if (allBookmarkRecipe[skipID + 16]) {
      setUserMyPageView([...allBookmarkRecipe.slice(skipID, skipID + 16)]);
    } else if (allBookmarkRecipe[skipID + 16] === undefined) {
      setUserMyPageView([...allBookmarkRecipe.slice(skipID)]);
    }
  };

  const isClickedAngle = function (angleType: string) {
    if (angleType === '<<') {
      const doubleLeftAngle = document!.getElementById('1');
      makePageNumBtn(preClickedTab, '<<');
      makePagenationBtnStyling('angle', doubleLeftAngle);
      makeRecipesPageNation(clickedMyList, 0);
    } else if (angleType === '>>') {
      const endPageSkipID = userInfo.likes.indexOf(
        userInfo.likes[(Math.ceil(clickedMyList.length / 16) - 1) * 16]
      );
      const doubleRightAngle = document!.getElementById(
        `${Math.ceil(clickedMyList.length / 16)}`
      );
      makePageNumBtn(preClickedTab, '>>');
      makePagenationBtnStyling('angle', doubleRightAngle);
      makeRecipesPageNation(clickedMyList, endPageSkipID);
    } else if (angleType === '<') {
      const prePageSkipID = userInfo.likes.indexOf(
        userInfo.likes[(pageNum[0] - 6) * 16]
      );
      makePageNumBtn(preClickedTab, '<');
      makeRecipesPageNation(clickedMyList, prePageSkipID);
    } else if (angleType === '>') {
      const nextPageSkipID = userInfo.likes.indexOf(
        userInfo.likes[(pageNum[0] + 4) * 16]
      );
      makePageNumBtn(preClickedTab, '>');
      makeRecipesPageNation(clickedMyList, nextPageSkipID);
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
            >
              {el}
            </TabMenu>
          );
        })}
      </Tab>
      {clickedMyList.length ? (
        <RecipeLists2 nowRecipeResult={userMyPageView} />
      ) : (
        '레시피 정보가 없습니다.'
      )}

      <PageButtonSection>
        <i
          className="angle double left icon"
          role="button"
          tabIndex={0}
          onKeyPress={(): void => {
            console.log('next');
          }}
          style={{ cursor: 'pointer' }}
          onClick={() => {
            isClickedAngle('<<');
          }}
        />
        <i
          role="button"
          tabIndex={0}
          className="angle left icon"
          onKeyPress={(): void => {
            console.log('next');
          }}
          style={{ cursor: 'pointer' }}
          onClick={() => {
            isClickedAngle('<');
          }}
        />

        {pageNum.map((el: number) => {
          return (
            <PageButton
              id={String(el)}
              className="selected"
              key={el}
              style={
                el === 1
                  ? {
                      background: '#f876de',
                      color: '#ffffff',
                    }
                  : { background: '#ffffff' }
              }
              onClick={(el: any) => {
                const newSkipID = userInfo.likes.indexOf(
                  userInfo.likes[(Number(el.target.innerHTML) - 1) * 16]
                );

                makePagenationBtnStyling('num', el);
                makeRecipesPageNation(clickedMyList, newSkipID);
              }}
            >
              {el}
            </PageButton>
          );
        })}
        <i
          role="button"
          tabIndex={0}
          className="angle right icon"
          onKeyPress={(): void => {
            console.log('next');
          }}
          style={{ cursor: 'pointer' }}
          onClick={() => {
            isClickedAngle('>');
          }}
        />
        <i
          role="button"
          tabIndex={0}
          className="angle double right icon"
          onKeyPress={(): void => {
            console.log('next');
          }}
          style={{ cursor: 'pointer' }}
          onClick={() => {
            isClickedAngle('>>');
          }}
        />
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
