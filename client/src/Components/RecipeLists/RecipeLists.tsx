import React from 'react';
import { useSelector } from 'react-redux';
import { RecipeLists, RecipeCards } from './RecipeLists.style';
import { userData } from '../../_slices/userSlice';

function RecipeLists2({
  pageName,
  nowRecipeListResult,
  bookmark,
  setBookmark,
  getRecipeList,
  infinityScrollPoint,
}: any) {
  const userInfo: any = useSelector(userData);
  const userLikesDrinks: any = userInfo.likes;

  const isBookmarked = userLikesDrinks.map((el: any, idx: number) => {
    let arr = [];
    arr = userLikesDrinks[idx].id;
    return arr;
  });

  const addRecipeLike = function (recipeInfo?: any) {
    if (!isBookmarked.includes(recipeInfo.id)) {
      setBookmark({
        userId: userInfo.id,
        recipeId: recipeInfo.id,
        likeCheck: true,
      });
    } else if (isBookmarked.includes(recipeInfo.id)) {
      setBookmark({
        userId: userInfo.id,
        recipeId: recipeInfo.id,
        likeCheck: false,
      });
    }
  };

  return (
    <RecipeLists defaultValue={pageName}>
      {nowRecipeListResult.map(function (el: any) {
        const setlikeCount = function (el: any) {
          if (userInfo.id) {
            if (!isBookmarked.includes(el.id) && bookmark.likeCheck) {
              el.likeCount = Number(el.likeCount) + 1;
            } else if (isBookmarked.includes(el.id) && !bookmark.likeCheck) {
              el.likeCount = Number(el.likeCount) - 1;
            }
          }
        };

        return (
          <RecipeCards defaultValue={pageName} key={el.id}>
            <img alt={el.name} src={el.image} />
            <div className="RecipeDescription">
              <div className="NameAndLikes">
                <div>{el.name}</div>
                <button
                  type="button"
                  onMouseEnter={(): void => {
                    addRecipeLike(el);
                  }}
                  onClick={() => {
                    setlikeCount(el);
                    getRecipeList('bookmarking');
                  }}
                >
                  <i
                    role="button"
                    tabIndex={0}
                    className="heart icon"
                    style={
                      userLikesDrinks.length !== 0 &&
                      isBookmarked.includes(el.id)
                        ? { color: '#F22FB0' }
                        : { color: '#FFDF00' }
                    }
                  />
                  {Number(el.likeCount)}
                </button>
              </div>
              <div className="RcipeTags">
                {el.tags.map(function (tag: string) {
                  return (
                    <button key={String(el.id) + tag} type="button">
                      {'#'.concat(tag)}
                    </button>
                  );
                })}
              </div>
            </div>
          </RecipeCards>
        );
      })}
      <div ref={infinityScrollPoint} />
    </RecipeLists>
  );
}

export default RecipeLists2;
