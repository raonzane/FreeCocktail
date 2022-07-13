import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TextPlugin } from 'gsap/TextPlugin';
import RecipeList2 from '../../../Components/RecipeLists/RecipeLists';
import { Container, Comment } from './Section2.style';

axios.defaults.withCredentials = true;
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(TextPlugin);

const Section2 = function Section2({ startPoint }: any) {
  const [nowTopRecipe, setNowTopRecipe] = useState([]);
  const lines: any = useRef();
  useEffect(() => {
    nowSection2Recipe();

    gsap.to(lines.current, {
      autoAlpha: 1,
      ease: 'power1.in',
      duration: 3,
      text: 'Best Cocktail Now!',
      delay: 1,
      scrollTrigger: {
        trigger: 'top',
        start: 'top top',
        end: 'center top',
        pin: true,
        scrub: true,
      },
    });
  }, []);

  const nowSection2Recipe = async function () {
    await axios
      .get(`http://localhost:3001/recipe/like?/skip=0&size=8`)
      .then((info: any) => {
        setNowTopRecipe(info.data);
      })
      .catch((err) => {
        console.log('err', err);
      });
  };

  return (
    <Container ref={startPoint}>
      <Comment ref={lines} />
      <RecipeList2
        pageName="Landing"
        nowRecipeListResult={nowTopRecipe}
        // bookmark={bookmark}
        // setBookmark={setBookmark}
        // getRecipeList={() => {
        //   getRecipeList('bookmarking');
        // }}
        // infinityScrollPoint={infinityScrollPoint}
      />
    </Container>
  );
};

export default Section2;
