import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { LoginModal } from 'Components/LoginModal';
import RecipeLists2 from 'Components/RecipeLists/RecipeLists';
import {
  Body,
  Category,
  CategoryButtons,
  CategoryDescription,
  Filter,
  FilterButtons,
  SectionDivider,
  CreatBtnSection,
  CreatBtn,
} from './RecipeListPage.style';
import TopButton from '../../Components/TopButton';
import Waves from '../../Components/Waves';

axios.defaults.withCredentials = true;

const categoryName: Array<any> = [
  '전체보기',
  '인기순',
  '해시태그',
  '베이스 드링크',
];
const subFilterName: Array<any> = [
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

interface RecipeListDataType {
  requestedCategoryBtn: string;
  isFilterOpened: string;
  description: string;
}

interface ExtraURI {
  requestType: string;
  categoryURI: string;
  filteringURI: string;
}

//! 레시피 리스트 페이지
const RecipeListPage = function RecipeList(): any {
  const [categoryBtn, setCategoryBtn] = useState<RecipeListDataType>({
    requestedCategoryBtn: '?',
    isFilterOpened: '',
    description: '저희 서비스의 모든 칵테일 레시피를 조회할 수 있습니다.',
  });
  const [isClickedTags, setIsClickedTags] = useState<any>([]);
  const [nowRecipeListResult, setNowRecipeListResult] = useState<any>([]);
  const [skipID, setSkipID] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    getRecipeList('filtering');
  }, [categoryBtn.requestedCategoryBtn]);

  //! 무한스크롤에 필요한 함수
  const infinityScrollPoint = useRef(null);

  const IOhandler = function (entries: any) {
    const eventTarget = entries[0];
    if (eventTarget.isIntersecting && !isLoading)
      getRecipeList('infinityScroll', skipID);
  };

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
  ): Promise<any> {
    const clickedTags = isClickedTags.join('&tag=').concat('&');

    const url = `http://localhost:3001/recipe/${categoryBtn.requestedCategoryBtn}${clickedTags}skip=${skipID}&size=16`;

    await axios
      .get(url)
      .then((info) => {
        //! Recipe 카드 TAG 갯수 3개로 제한
        const result = info.data;

        for (let i = 0; i < result.length; i += 1) {
          if (result[i].tags.length >= 3) {
            result[i].tags = result[i].tags.splice(0, 3);
          }
        }

        if (requestType === 'filtering') {
          setNowRecipeListResult([...result]);
          setSkipID(result.length);
        } else if (requestType === 'infinityScroll') {
          setNowRecipeListResult([...nowRecipeListResult, ...result]);
          setSkipID(nowRecipeListResult.length + result.length);
        }

        if (result.length < 16) {
          setIsLoading(true);
        } else {
          setIsLoading(false);
        }
      })
      .catch((err) => {
        console.log('에러', err);
      });

    const URI: ExtraURI = {
      requestType: 'bookmarking',
      categoryURI: `${categoryBtn.requestedCategoryBtn}`,
      filteringURI: `${isClickedTags}`,
    };
  };

  //! 카테고리 버튼 만드는 함수
  const makeCategoryBtn = function (categoryName: any): any {
    const [prePicked, setPrePicked] = useState('전체보기');

    //! 카테고리 버튼 작동 함수
    const setCategoryBtns = function (e: any): any {
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
        setNowRecipeListResult([]);

        if (nowPicked === '전체보기') {
          setSkipID(0);
          setCategoryBtn({
            requestedCategoryBtn: '?',
            isFilterOpened: '',
            description:
              '저희 서비스의 모든 칵테일 레시피를 조회할 수 있습니다.',
          });
        } else if (nowPicked === '인기순') {
          setSkipID(0);
          setCategoryBtn({
            requestedCategoryBtn: 'like?',
            isFilterOpened: '',
            description:
              '현재 시간 가장 인기 많은 칵테일부터 조회할 수 있습니다.',
          });
        } else if (nowPicked === '해시태그') {
          setSkipID(0);
          setCategoryBtn({
            requestedCategoryBtn: 'tag?tag=',
            isFilterOpened: `${nowPicked}`,
            description:
              '칵테일이 처음이라면, 원하는 태그를 통해 가장 잘 맞는 칵테일을 찾아보세요',
          });
        } else if (nowPicked === '베이스 드링크') {
          setSkipID(0);
          setCategoryBtn({
            requestedCategoryBtn: 'tag?tag=',
            isFilterOpened: `${nowPicked}`,
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
          onClick={(e: any) => setCategoryBtns(e)}
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

    const setFilterBtns = function (e: any): any {
      const pickedFilterName = e.target.innerHTML;

      setNowRecipeListResult([]);
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
        {isModalOpen ? <LoginModal setIsModalOpen={setIsModalOpen} /> : ''}
        <Category>{makeCategoryBtn(categoryName)}</Category>
        <CategoryDescription>{categoryBtn.description}</CategoryDescription>
        <Filter>
          {categoryBtn.isFilterOpened === '해시태그'
            ? makeFilterBtn(subFilterName[0])
            : categoryBtn.isFilterOpened === '베이스 드링크'
            ? makeFilterBtn(subFilterName[1])
            : ''}
        </Filter>
        <SectionDivider section />
        <CreatBtnSection>
          <CreatBtn> + </CreatBtn>
        </CreatBtnSection>
        <RecipeLists2
          nowRecipeListResult={nowRecipeListResult}
          getRecipeList={() => {
            getRecipeList();
          }}
          setIsModalOpen={setIsModalOpen}
          infinityScrollPoint={infinityScrollPoint}
        />

        <TopButton />
      </Body>
    </>
  );
};

export default RecipeListPage;
