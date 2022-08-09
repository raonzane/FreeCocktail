import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { RecipeLists, RecipeCards } from './RecipeLists.style';
import { userData } from '../../_slices/userSlice';
import { editUserBookmark } from '../../_slices/userSlice';

function RecipeLists2({
  pageName,
  nowRecipeListResult,
  setIsModalOpen,
  infinityScrollPoint,
}: any) {
  interface RecipeLikeDataType {
    userId: number;
    recipeId: number;
    likeCheck: boolean;
  }

  let userLikesCount: Array<number> = nowRecipeListResult.map((el: any) => {
    return el.likeCount;
  });

  const [likeCountView, setLikeCountView] = useState<Array<number>>([]);

  useEffect(() => {
    userLikesCount = nowRecipeListResult.map((el: any) => {
      return el.likeCount;
    });

    setLikeCountView(userLikesCount);
  }, [nowRecipeListResult]);

  let userInfo: any = useSelector(userData);
  const dispatch = useDispatch();
  const userLikesDrinks: any = userInfo.likes;

  const isBookmarked = userLikesDrinks.map((el: any, idx: number) => {
    let arr = [];
    arr = userLikesDrinks[idx].id;
    return arr;
  });

  const [bookmark, setBookmark] = useState<RecipeLikeDataType>({
    userId: 0,
    recipeId: 0,
    likeCheck: false,
  });

  const updateLikeCountView = function (cur: any, idx: number) {
    if (!isBookmarked.includes(cur.id)) {
      userLikesCount[idx] = likeCountView[idx] + 1;
    } else if (isBookmarked.includes(cur.id)) {
      userLikesCount[idx] = likeCountView[idx] - 1;
    }
    setLikeCountView([...userLikesCount]);
  };

  const updateBookmark = async function (bookmarkInfo: any) {
    const url = `http://localhost:3001/recipe/like`;

    if (userInfo.id) {
      userLikesDrinks.forEach((recipes: any) => {
        if (!(recipes.id === bookmarkInfo.recipeId) && bookmarkInfo.likeCheck) {
          setBookmark({
            userId: userInfo.id,
            recipeId: bookmarkInfo.recipeId,
            likeCheck: false,
          });
        } else if (
          recipes.id === bookmarkInfo.recipeId &&
          !bookmarkInfo.likeCheck
        ) {
          setBookmark({
            userId: userInfo.id,
            recipeId: bookmarkInfo.recipeId,
            likeCheck: true,
          });
        }
      });

      await axios
        .post(url, bookmarkInfo)
        .then((res: any) => {
          if (!isBookmarked.includes(bookmarkInfo.recipeId)) {
            userInfo = {
              ...userInfo,
              likes: [...userLikesDrinks, res.data],
            };
          } else if (isBookmarked.includes(bookmarkInfo.recipeId)) {
            const removedBookmark = userLikesDrinks.filter((el: any) => {
              return el.id !== res.data.id;
            });
            userInfo = {
              ...userInfo,
              likes: [...removedBookmark],
            };
          }
          dispatch(editUserBookmark(userInfo));
        })
        .catch((err) => console.log(err));
    } else if (bookmark.userId === 0) {
      setIsModalOpen(true);
    }
  };

  return (
    <RecipeLists defaultValue={pageName}>
      {nowRecipeListResult.map(function (cur: any, idx: number) {
        return (
          <RecipeCards defaultValue={pageName} key={cur.id}>
            <img alt={cur.name} src={cur.image} />
            <div className="RecipeDescription">
              <div className="NameAndLikes">
                <div>{cur.name}</div>
                <button
                  type="button"
                  onClick={() => {
                    let tempBookmark: RecipeLikeDataType = {
                      userId: 0,
                      recipeId: 0,
                      likeCheck: false,
                    };

                    if (!isBookmarked.includes(cur.id)) {
                      tempBookmark = {
                        userId: userInfo.id,
                        recipeId: cur.id,
                        likeCheck: true,
                      };
                    } else if (isBookmarked.includes(cur.id)) {
                      tempBookmark = {
                        userId: userInfo.id,
                        recipeId: cur.id,
                        likeCheck: false,
                      };
                    }
                    setBookmark({ ...tempBookmark });
                    updateLikeCountView(cur, idx);
                    updateBookmark(tempBookmark);
                  }}
                >
                  <i
                    role="button"
                    tabIndex={0}
                    className="heart icon"
                    style={
                      userLikesDrinks.length !== 0 &&
                      isBookmarked.includes(cur.id)
                        ? { color: '#F22FB0' }
                        : { color: '#FFDF00' }
                    }
                  />
                  {likeCountView[idx]}
                </button>
              </div>
              <div className="RcipeTags">
                {cur.tags.map((tag: string) => {
                  return (
                    <button key={String(cur.id) + tag} type="button">
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
