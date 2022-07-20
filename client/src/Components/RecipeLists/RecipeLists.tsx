import React, { useState } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { RecipeLists, RecipeCards } from './RecipeLists.style';
import { userData } from '../../_slices/userSlice';
import { userBookmarkEdit } from '../../_slices/userSlice';

function RecipeLists2({
  pageName,
  nowRecipeListResult,
  getRecipeList,
  setIsModalOpen,
  infinityScrollPoint,
}: any) {
  interface RecipeLikeDataType {
    userId: number;
    recipeId: number;
    likeCheck: boolean;
  }

  let userInfo: any = useSelector(userData);
  const userLikesDrinks: any = userInfo.likes;

  const dispatch = useDispatch();

  const isBookmarked = userLikesDrinks.map((el: any, idx: number) => {
    let arr = [];
    arr = userLikesDrinks[idx].id;
    return arr;
  });

  const [bookmark, setBookmark]: any = useState<RecipeLikeDataType>({
    userId: 0,
    recipeId: 0,
    likeCheck: false,
  });

  const bookmarkHandling = async function (bookmarkInfo: any) {
    if (userInfo.id) {
      const url = `http://localhost:3001/recipe/like`;

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
            // Todo: 추가된 데이터를 dispatching
            userInfo = {
              ...userInfo,
              likes: [...userLikesDrinks, res.data],
            };
          } else if (isBookmarked.includes(bookmarkInfo.recipeId)) {
            // Todo: 삭제된 데이터를 dispatching
            const userRemoveBookmared = userLikesDrinks.filter((el: any) => {
              return el.id !== res.data.id;
            });
            userInfo = {
              ...userInfo,
              likes: [...userRemoveBookmared],
            };
          }
          dispatch(userBookmarkEdit(userInfo));
        })
        .catch((err) => console.log(err));
    } else if (bookmark.userId === 0) {
      setIsModalOpen(true);
    }

    getRecipeList();
  };

  return (
    <RecipeLists defaultValue={pageName}>
      {nowRecipeListResult.map(function (el: any) {
        const setLikeCount = function (el: any) {
          if (userInfo.id) {
            if (!isBookmarked.includes(el.id)) {
              el.likeCount = Number(el.likeCount) + 1;
            } else if (isBookmarked.includes(el.id)) {
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
                  onClick={() => {
                    let tempBookmark = {
                      userId: 0,
                      recipeId: 0,
                      likeCheck: false,
                    };

                    if (!isBookmarked.includes(el.id)) {
                      setBookmark({
                        userId: userInfo.id,
                        recipeId: el.id,
                        likeCheck: true,
                      });

                      tempBookmark = {
                        userId: userInfo.id,
                        recipeId: el.id,
                        likeCheck: true,
                      };
                    } else if (isBookmarked.includes(el.id)) {
                      setBookmark({
                        userId: userInfo.id,
                        recipeId: el.id,
                        likeCheck: false,
                      });

                      tempBookmark = {
                        userId: userInfo.id,
                        recipeId: el.id,
                        likeCheck: false,
                      };
                    }
                    setLikeCount(el);
                    bookmarkHandling(tempBookmark);
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
