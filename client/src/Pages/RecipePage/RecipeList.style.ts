import React from 'react';
import styled from 'styled-components';
import { Button, Divider, Card } from 'semantic-ui-react';
import { theme } from '../../styles/theme';

const Body = styled.div`
  /* border: 1px solid green; */
  min-height: 90vh;
  margin-top: 6.938rem;
  justify-content: center;
  padding: 0 30px 0 30px;
  @media ${theme.tablet} {
    /* border: 1px solid red; */
    margin-top: 8.938rem;
    padding: 0 20px 0 20px;
  }
  @media ${theme.mobile} {
    /* border: 1px solid pink; */
    margin-top: 7.938rem;
    padding: 0 10px 0 10px;
  }
`;

const Category = styled.div`
  /* border: 1px solid blue; */
  /* background-color: red; */
  display: flex;
  max-width: 1200px;
  height: 5rem;
  margin: 10rem auto 1rem auto;
  @media ${theme.tablet} {
    /* width: 35rem; */
    width: inherit;
    height: 3rem;
  }
  @media ${theme.mobile} {
    /* width: 25rem; */
    width: inherit;
    height: 2rem;
  }
`;

const CategoryButtons = styled(Button)({
  'width': '10rem',
  'height': '3rem',
  '&&&': {
    'zIndex': 2,
    'margin': 'auto',
    'borderRadius': '50px',
    'backgroundColor': '#FFFFFF',
    'border': '1.5px solid #494949',
    'color': '#494949',
    'fontSize': '18px',
    //* Responsive (tablet - mobile)
    '@media (min-width: 481px) and (max-width: 1023px)': {
      width: '8rem',
      fontSize: '13px',
    },
    '@media (max-width: 480px)': {
      width: '6rem',
      fontSize: '10px',
    },
  },
  '&&&:hover': {
    backgroundColor: '#94FDD7',
  },
});

const Filter = styled.div`
  /* border: 1px solid red; */
  width: 37.5rem;
  height: 10rem;
  display: grid;
  align-content: stretch;
  justify-content: center;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.5rem;
  margin: 2rem auto 10rem auto;
  @media ${theme.tablet} {
    width: 27rem;
    height: 3rem;
  }
  @media ${theme.mobile} {
    width: 25rem;
    height: 2.5rem;
    grid-template-columns: repeat(4, 1fr);
  }
`;

const FilterButtons = styled(Button)({
  'width': '8rem',
  'height': '3rem',
  '&&&': {
    'margin': 'auto',
    'zIndex': 2,
    'backgroundColor': '#ffffff',
    'border': '1.5px solid #494949',
    'borderRadius': '50px',
    'color': '#494949',
    'fontSize': '15px',
    //* Responsive (tablet - mobile)
    '@media (min-width: 481px) and (max-width: 1023px)': {
      width: '8rem',
      fontSize: '13px',
    },
    '@media (max-width: 480px)': {
      'width': '5rem',
      'fontSize': '10px',
      '&&&:nth-child(7)': {
        fontSize: '10px',
      },
    },
  },
  '&&&:nth-child(7)': {
    fontSize: '13px',
  },
  '&&&:hover': {
    color: '#ffffff',
    backgroundColor: '#CB77FF',
  },
});

const SectionDivider = styled(Divider)({
  'backgroundColor': '#C4C4C4',
  '&&&': {
    marginTop: '3rem',
  },
});

const RecipeLists = styled.div`
  width: inherit;
  /* width: 120rem; */
  height: 70rem;
  display: flex;
  margin: 10rem auto 1rem auto;
  /* border: 1px solid red; */
`;

const RecipeCards = styled(Card)({
  'width': '16rem',
  'height': '24rem',
  '>img': {
    width: '80%',
    height: '70%',
    margin: '1rem auto 0.25rem auto',
    background: '#CB77FF',
  },
  // '&&&': { //TODO: Recipe Card border
  //   border: '1px solid black',
  // },

  //* RecipeDescription
  '>div': {
    'width': '80%',
    'height': '20%',
    'margin': '0.25rem auto 1rem auto',
    // 'border': '1px solid orange',

    //* RecipeName & RecipeLikes
    '>div:nth-child(1)': {
      // 'background': 'blue',
      'display': 'grid',
      'gridTemplateColumns': '70% 30%',
      'margin': '0.5rem auto 0.25rem auto',
      'padding': '0.25rem',
      'color': 'black',
      'fontFamily': 'Gmarket Sans TTF',
      'height': '2rem',

      '&:hover': {
        cursor: 'pointer',
      },

      '>div:nth-child(2)': {
        'color': 'white',
        'WebkitTextStroke': '0.7px black',

        '&:hover': {
          color: 'FFA2C3',
          cursor: 'pointer',
        },
      },
    },

    //* RecipeTags
    '>div:nth-child(2)': {
      'display': 'flex',
      'gridTemplateColumns': '140px 70px',
      'height': '40%',
      'margin': '0.25rem auto 1rem auto',
      // 'background': 'pink',
      // 'border': '1px solid orange',

      //* Tags
      '>button': {
        'flex': '1 1 auto',
        'margin': 'auto 0.25rem',
        'padding': '0.25rem',
        'borderRadius': '50px',
        'border': '1px solid #FFB000',
        'backgroundColor': '#FFDF00',
        'fontSize': '0.9rem',

        '&: hover': {
          cursor: 'pointer',
          fontWeight: '600',
        },
      },
    },
  },
});

const TopButtonSection = styled.div`
  width: 100%;
  height: 5%;
  text-align: right;
  /* border: 1px solid orange; */
`;

export {
  Body,
  Category,
  CategoryButtons,
  Filter,
  FilterButtons,
  SectionDivider,
  RecipeLists,
  RecipeCards,
  TopButtonSection,
};
