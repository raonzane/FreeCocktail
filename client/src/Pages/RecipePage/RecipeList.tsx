import { useState } from 'react';
import Waves from '../../Components/Waves';
import {
  Body,
  Category,
  CategoryButtons,
  Filter,
  FilterButtons,
  SectionDivider,
  RecipeLists,
  RecipeCards,
  TopButtonSection,
} from './RecipeList.style';
import { TopButton } from '../../Components/TopButton';

const RecipeList = function RecipeList() {
  const recipeName = 'Magarita';
  const likes = '1917';

  const [isPick, setIsPick] = useState(false);
  const [child, setChild] = useState('');
  const makePickOrNot = function (e: any): any {
    // console.log('e', e.target.innerHTML);
    // console.log(isPick);
    setIsPick(!isPick);
    setChild(e.target.innerHTML);
  };

  console.log('브라우저 너비', document.body.offsetWidth);

  const moveToTheTop = function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <Waves />
      <Body>
        <Category>
          <CategoryButtons onClick={(e: any) => makePickOrNot(e)}>
            전체보기
          </CategoryButtons>
          <CategoryButtons onClick={(e: any) => makePickOrNot(e)}>
            인기순
          </CategoryButtons>
          <CategoryButtons onClick={(e: any) => makePickOrNot(e)}>
            해시태그
          </CategoryButtons>
          <CategoryButtons onClick={(e: any) => makePickOrNot(e)}>
            베이스
          </CategoryButtons>
        </Category>
        <Filter>
          <FilterButtons> # 달달한 </FilterButtons>
          <FilterButtons> # 청량한 </FilterButtons>
          <FilterButtons> # 드라이한 </FilterButtons>
          <FilterButtons> # 트로피칼 </FilterButtons>
          <FilterButtons> # 커피 </FilterButtons>
          <FilterButtons> # 무알콜 </FilterButtons>
          <FilterButtons>
            # 편의점 <br /> 레시피
          </FilterButtons>
        </Filter>
        <SectionDivider section />
        <RecipeLists>
          <RecipeCards>
            <img alt="이미지 자리" />
            <div className="RecipeDescription">
              <div className="NameAndLikes">
                <div>{recipeName}</div>
                <div>
                  <i className="heart icon" style={{ color: '#FFDF00' }} />
                  {likes}
                </div>
              </div>
              <div className="RcipeTags">
                <button type="submit"> #어쩌구 </button>
                <button type="submit"> #저쩌구 </button>
                <button type="submit"> #랄라라 </button>
              </div>
            </div>
          </RecipeCards>
        </RecipeLists>
        <TopButtonSection>
          <TopButton
            onClick={() => {
              moveToTheTop();
            }}
          >
            UP
          </TopButton>
        </TopButtonSection>
      </Body>
    </>
  );
};

export default RecipeList;
