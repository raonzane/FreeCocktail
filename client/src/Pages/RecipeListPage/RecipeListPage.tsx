import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { LoginModal } from 'Components/LoginModal';
import RecipeLists2 from 'Components/RecipeLists/RecipeLists';
import Modal from 'Components/_Modal/Modal';
import RecipeCreate from 'Components/RecipeCreate/RecipeCreate';
import { RecipePage, RecipeCard, IODataType } from '../../types/types';
import {
  Body,
  Category,
  CategoryButtons,
  CategoryDescription,
  Filter,
  FilterButtons,
  SectionDivider,
  CreateBtnSection,
  CreateBtn,
} from './RecipeListPage.style';
import TopButton from '../../Components/TopButton';
import Waves from '../../Components/Waves';
import { userData } from '../../_slices/userSlice';

axios.defaults.withCredentials = true;

const categoryName: Array<string> = [
  '전체보기',
  '인기순',
  '해시태그',
  '베이스 드링크',
];
const subFilterName: Array<Array<string>> = [
  [
    '달달한',
    '청량한',
    '드라이한',
    '트로피칼',
    '커피',
    '무알콜',
    '편의점레시피',
  ],
  ['샴페인', '꼬냑', '진', '럼', '테낄라', '보드카', '위스키', '기타'],
];

//! 레시피 리스트 페이지
const RecipeListPage: React.FC = function () {
  //! 무한스크롤에 필요한 함수
  const infinityScrollPoint = useRef(null);

  const IOhandler = function (entries: Array<IODataType>) {
    const eventTarget = entries[0];
    if (eventTarget.isIntersecting && !isLoading)
      getRecipeList('infinityScroll', skipID);
  };

  const [skipID, setSkipID] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(0);
  const [isClickedTags, setIsClickedTags] = useState<Array<string>>([]);
  const [nowRecipeResult, setNowRecipeResult] = useState<Array<RecipeCard>>([]);
  const [requestButton, setRequestButton] = useState<RecipePage>({
    requestedCategory: '?',
    requestedTags: '',
    description: '저희 서비스의 모든 칵테일 레시피를 조회할 수 있습니다.',
  });

  //! 레시피 생성 관련
  const [isCreateClick, setIsCreateClick] = useState(false);
  const userInfo: any = useSelector(userData);

  useEffect(() => {
    getRecipeList('filtering');
  }, [requestButton.requestedCategory]);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '500px',
      threshold: 0,
    };

    const IO = new IntersectionObserver(IOhandler, options);
    if (infinityScrollPoint.current) IO.observe(infinityScrollPoint.current);

    return () => {
      IO.disconnect();
    };
  }, [IOhandler]);

  //! RecipeList 기본 렌더: 전체보기 조회
  const getRecipeList = async function (
    requestType?: string,
    skipID = 0
  ): Promise<void> {
    const clickedTags = isClickedTags.join('&tag=').concat('&');

    const url = `http://localhost:3001/recipe/${requestButton.requestedCategory}${clickedTags}skip=${skipID}&size=16`;

    await axios
      .get(url)
      .then((info) => {
        if (requestType === 'filtering') {
          setNowRecipeResult([...info.data]);
          setSkipID(info.data.length);
        } else if (requestType === 'infinityScroll') {
          setNowRecipeResult([...nowRecipeResult, ...info.data]);
          setSkipID(nowRecipeResult.length + info.data.length);
        }

        if (info.data.length < 16) {
          setIsLoading(true);
        } else {
          setIsLoading(false);
        }
      })
      .catch((err) => {
        console.log('여기 에러', err);
      });
  };

  //! 카테고리 버튼 만드는 함수
  const makeCategoryBtn = function (categoryName: Array<string>): any {
    const [prePicked, setPrePicked] = useState('전체보기');

    //! 카테고리 버튼 작동 함수
    const setRequestButtons = function (e: any): void {
      const nowPicked = e.target.innerHTML;

      if (!nowPicked.includes('✨')) {
        if (prePicked !== nowPicked) {
          const prePickedBtn = document.getElementById(prePicked);
          prePickedBtn!.style.background = '#ffffff';
          prePickedBtn!.textContent = prePicked;
          setPrePicked(nowPicked);
        }
        e.target.textContent = '✨'.concat(nowPicked).concat('✨');
        e.target.style.background = '#94FDD7';

        setIsClickedTags([]);
        setNowRecipeResult([]);

        if (nowPicked === '전체보기') {
          setSkipID(0);
          setRequestButton({
            requestedCategory: '?',
            requestedTags: '',
            description:
              '저희 서비스의 모든 칵테일 레시피를 조회할 수 있습니다.',
          });
        } else if (nowPicked === '인기순') {
          setSkipID(0);
          setRequestButton({
            requestedCategory: 'like?',
            requestedTags: '',
            description:
              '현재 시간 가장 인기 많은 칵테일부터 조회할 수 있습니다.',
          });
        } else if (nowPicked === '해시태그') {
          setSkipID(0);
          setRequestButton({
            requestedCategory: 'tag?tag=',
            requestedTags: `${nowPicked}`,
            description:
              '칵테일이 처음이라면, 원하는 태그를 통해 가장 잘 맞는 칵테일을 찾아보세요',
          });
        } else if (nowPicked === '베이스 드링크') {
          setSkipID(0);
          setRequestButton({
            requestedCategory: 'tag?tag=',
            requestedTags: `${nowPicked}`,
            description:
              '다양한 베이스 드링크를 통해 나에게 잘 맞는 칵테일을 찾아보세요',
          });
        }
      } else if (nowPicked.includes('✨')) {
        e.target.textContent = nowPicked.slice(1, -1);

        if (prePicked === e.target.textContent) {
          e.target.style.background = '#94FDD7';
          e.target.textContent = nowPicked;
        } else {
          e.target.style.background = '#ffffff';
        }
      }
    };

    return categoryName.map(function (el: string, index: number): any {
      return (
        <CategoryButtons
          id={categoryName[index]}
          key={categoryName[index]}
          onClick={(e: any) => setRequestButtons(e)}
          style={{
            background:
              categoryName[index] === '전체보기' ? '#94FDD7' : '#ffffff',
          }}
        >
          {categoryName[index] === '전체보기'
            ? '✨전체보기✨'
            : categoryName[index]}
        </CategoryButtons>
      );
    });
  };

  //! 필터 버튼 만드는 함수
  const makeFilterBtn = function (subFilterNameList: Array<string>): any {
    const isPickedFilterName = isClickedTags;

    const setFilterBtns = function (e: any): void {
      const pickedFilterName = e.target.innerHTML;

      setNowRecipeResult([]);
      setSkipID(0);

      if (!pickedFilterName.includes('💛')) {
        e.target.textContent = '💛'.concat(pickedFilterName);
        e.target.style.background = '#CB77FF';
        e.target.style.color = '#ffffff';

        isPickedFilterName.push(pickedFilterName);
      } else if (pickedFilterName.includes('💛')) {
        e.target.textContent = pickedFilterName.slice(2);
        e.target.style.background = '#ffffff';
        e.target.style.color = '#494949';

        for (let i = 0; i < isPickedFilterName.length; i += 1) {
          if (isPickedFilterName[i].includes(pickedFilterName.slice(2))) {
            isPickedFilterName.splice(i, 1);
          }
        }
      }

      setIsClickedTags(isPickedFilterName);
      getRecipeList('filtering');
    };
    return subFilterNameList.map(function (el: string, index: number): any {
      return (
        <FilterButtons
          id={subFilterNameList[index]}
          key={subFilterNameList[index]}
          onClick={(e: any) => setFilterBtns(e)}
        >
          {el}
        </FilterButtons>
      );
    });
  };

  return (
    <>
      <Waves />
      <Body>
        {isModalOpen ? (
          <LoginModal
            setIsModalOpen={setIsModalOpen}
            isModalOpen={isModalOpen}
          />
        ) : (
          ''
        )}
        <Category>{makeCategoryBtn(categoryName)}</Category>
        <CategoryDescription>{requestButton.description}</CategoryDescription>
        <Filter>
          {requestButton.requestedTags === '해시태그'
            ? makeFilterBtn(subFilterName[0])
            : requestButton.requestedTags === '베이스 드링크'
            ? makeFilterBtn(subFilterName[1])
            : ''}
        </Filter>
        <CreateBtnSection>
          <CreateBtn
            aria-label="레시피 작성"
            onClick={() =>
              userInfo.id ? setIsCreateClick(true) : setIsModalOpen(1)
            }
          >
            레시피 등록하기
          </CreateBtn>
          {isCreateClick && (
            <Modal data={<RecipeCreate />} close={setIsCreateClick} />
          )}
        </CreateBtnSection>
        <SectionDivider section />
        {nowRecipeResult.length ? (
          <RecipeLists2
            nowRecipeResult={nowRecipeResult}
            setIsModalOpen={setIsModalOpen}
            infinityScrollPoint={infinityScrollPoint}
          />
        ) : (
          <div
            style={{
              fontSize: '1.8vh',
              margin: '10vw auto 10vw auto',
              textAlign: 'center',
              lineHeight: '1.7rem',
            }}
          >
            아쉽게도 결과가 존재하지 않습니다. 😇 <br />
            다른 조합으로 검색해보세요.
          </div>
        )}
        <TopButton />
      </Body>
    </>
  );
};

export default RecipeListPage;
