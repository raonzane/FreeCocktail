import React from 'react';
import styled from 'styled-components';
import { Card } from 'semantic-ui-react';
import { theme } from '../../styles/theme';
import LandingSectionCardShape from '../../images/LandingSectionCardShape.webp';

const RecipeLists = styled.div`
  width: 60rem;
  margin: 3rem auto;
  display: grid;
  align-content: stretch;
  justify-content: center;
  grid-gap: 1rem;
  grid-template-columns: repeat(4, 1fr);

  ${(props) => {
    return props.defaultValue === 'Landing'
      ? `
      @media ${theme.tablet} {
        width: 18vw;
        grid-template-columns: repeat(4, 1fr);
      }
      `
      : `
      @media ${theme.tablet} {
        width: 18vw;
        grid-template-columns: repeat(3, 1fr);
        margin: 3rem auto 1rem auto;
      }
      `;
  }}

  @media ${theme.mobile} {
    width: 20vw;
    margin: 2rem auto auto auto;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 1rem;
    row-gap: 0.2rem;
  }
`;

const RecipeCards = styled(Card)`
  &&& {
    // ? Recipe card
    width: 13rem;
    height: 18.5rem;
    display: flex;
    margin-top: 0rem; //* 첫번째 카드만을 위한 속성
    /* margin: center auto; */

    ${(props) => {
      return props.defaultValue === 'Landing'
        ? `
        flex-direction: column-reverse;
        box-shadow: none;
        background-color: #f8ffb5;
        background-image: url(${LandingSectionCardShape}); 
        background-position: center;
        background-repeat: no-repeat;
        background-size: 100% 100%;
        
        @media ${theme.tablet} {
          width: 17vw;
          height: 25vw;
        }
        
        @media ${theme.mobile} {
          width: 34vw;
          height: 48vw;
        }`
        : `
        
        @media ${theme.tablet} {
          width: 20vw;
          height: 28vw;
        }
    
        @media ${theme.mobile} {
          width: 44vw;
          height: 63vw;
        }
        `;
    }};
  }

  > img {
    ${(props) => {
      return props.defaultValue === 'Landing'
        ? `width: 12rem; 
        height: 12.5rem; 
        margin: 0.5rem auto;

        @media ${theme.tablet} {
          width: 15vw;
          height: 16vw;
        }

        @media ${theme.mobile} {
          width: 27.5vw;
          height: 31vw; 
        }`
        : `width: 86%;
        height: 73%; 
        margin: 0.8rem auto 0.25rem auto;

        @media ${theme.mobile} {
          width: 9rem;
          height: 14rem;
          margin: 0.4rem auto 0.2rem auto;
        }
        `;
    }};
  }

  //* RecipeDescription
  > div {
    flex-direction: column;
    display: flex;
    width: 100%;

    ${(props) => {
      return props.defaultValue === 'Landing'
        ? `height: 1.85rem; 
        margin-left: 1.3rem; 
        text-align: center;

        @media ${theme.tablet} {
          margin: 0.5rem 0rem 0rem 1rem;
        }

        @media ${theme.mobile} {
          width: 110%;
          margin-left: 0.5rem; 
        }
        `
        : ` height: 4rem;
        margin: 0.25rem auto;
        
        @media ${theme.tablet} {
          width: 90%;
          height: 3rem;
          margin: 0.1rem auto;
        }
        @media ${theme.mobile} {
          height: 3rem;
        }`;
    }}

    //* RecipeName & RecipeLikes
    > div:nth-child(1) {
      ${(props) =>
        props.defaultValue === 'Landing'
          ? `width: 100%;
          font-size: 1rem;

          @media ${theme.tablet} {
            width: 120%;
            margin: 0.5rem -0.85rem -4rem -0.85rem;
            padding: auto;
            font-size: 1.5vw;
          }

          @media ${theme.mobile} {
            margin: 1rem 0rem 0rem 0rem;
            font-size: 0.7rem;
          }
         `
          : `
          width: 11.5rem;
          height: 45%;
          font-size: 0.9rem;
          word-break: keep-all;
          
          @media ${theme.tablet} {
            width: 100%;
            height: 3vw;
            margin: 0rem auto;
            grid-template-columns: 75% 25%;
            font-size: 1.3vw;

          }
          
          @media ${theme.mobile} {
            width: 85%;
            grid-template-columns: 75% 25%;
            margin: 0.15rem auto;
            font-size: 0.71rem;
          }`}

      display: grid;
      grid-template-columns: 80% 20%;
      margin: 0.3rem auto;
      padding: 0.25rem;
      color: #494949;
      font-family: 'Gmarket Sans TTF';

      &:hover {
        cursor: pointer;
      }

      //* heart icon & likes
      > button:nth-child(2) {
        ${(props) => {
          return props.defaultValue === 'Landing'
            ? `
            aria-hidden: true;
            display: none;
            visibility: hidden;`
            : `
            line-height: 1;
          color: #494949;
          font-size: 0.8rem;
          font-weight: 600;

          > i {
            text-shadow: -1px 0 #494949, 0 1px #494949, 1px 0 #494949, 0 -1px #494949;
          }

        :hover {
          cursor: pointer;
        }

        @media ${theme.tablet} {
          font-size: 1.3vw;
          height: 1vw;
        }

        @media ${theme.mobile} {
          font-size: 2.4vw;
          margin: 0.05rem auto;
        }`;
        }};
      }
    }

    //* RecipeTags
    > div:nth-child(2) {
      display: flex;
      flex-direction: row;
      width: 85%;
      height: 32.5%;
      margin: 0.15rem auto;
      padding: auto;

      @media ${theme.tablet} {
        width: 115%;
        margin: 0.35rem auto 0.2rem auto;
      }

      @media ${theme.mobile} {
        width: 85%;
        margin: 0.25rem auto 0rem auto;
      }

      ${(props) => {
        return props.defaultValue === 'Landing'
          ? `aria-hidden: true;
          display: none;
          visibility: hidden;
          `
          : `
      > button {
        flex: 1 1 1;
        width: fit-content;
        height: fit-content;
        font-size: 0.75rem;
        border-radius: 50px;
        border: 1px solid #ffb000;
        background-color: #ffdf00;
        margin: auto 0.15rem;
        padding: 0.15em;

        @media ${theme.tablet} {
          font-size: 0.1rem;
          transform: scale(0.90);
          transform-origin: left;
          margin: auto 0.05rem;
        }

        @media ${theme.mobile} {
          font-size: 0.1rem;
          transform: scale(0.89);
          margin: auto 0.05rem;
        }

        hover: {
          cursor: pointer;
          font-weight: 600;
        }
      }
      `;
      }};
    }
  }
`;

export { RecipeLists, RecipeCards };
