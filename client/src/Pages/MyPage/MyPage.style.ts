import styled from 'styled-components';
import { Button, Menu } from 'semantic-ui-react';
import { theme } from '../../styles/theme';

const Body = styled.div`
  min-height: 90vh;
  margin-top: 6.938rem;
  justify-content: center;
  padding: 0 30px;

  @media ${theme.tablet} {
    margin-top: 8.938rem;
    padding: 0 10px;
  }
  @media ${theme.mobile} {
    margin-top: 7.938rem;
    padding: 0 8px;
  }
`;

const UserProfileContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60rem;
  height: 20rem;
  margin: 5rem auto 2rem auto;
  padding: 0 30px;

  @media ${theme.tablet} {
    width: 45rem;
    margin-top: 4rem;
    padding: 0 10px;
  }

  @media ${theme.mobile} {
    display: block;
    align-items: center;
    justify-content: center;
    width: 23rem;
    margin-top: 2.5rem;
    padding: 0 10px;
  }
`;

const UserImg = styled.img`
  /* flex: 1 1 auto; */
  width: 20rem;
  height: 20rem;
  margin: 0.25rem;
  border: 2px solid #494949;
  border-radius: 50%;

  @media ${theme.tablet} {
    width: 15rem;
    height: 15rem;
    margin: 0.25rem;
  }

  @media ${theme.mobile} {
    width: 10rem;
    height: 10rem;
    margin: 0.5rem auto;
  }
`;

const UserInfoEdit = styled.div`
  flex: 0.7 1 auto;
  margin-left: 2rem;

  @media ${theme.tablet} {
    margin: 0.25rem;
    width: 20%;
  }

  @media ${theme.mobile} {
    margin: 1rem auto;
  }
`;

const UserInfoGreeting = styled.div`
  height: 3rem;
  margin: 6.5rem auto 2rem auto;
  text-align: center;
  font-size: 20px;

  @media ${theme.tablet} {
    margin: 5rem auto 3rem auto;
  }

  @media ${theme.mobile} {
    margin: 1rem auto;
    padding: 1rem;
  }
`;

const UserInfoButtons = styled.div`
  display: flex;
  width: 90%;
  margin: auto;

  @media ${theme.tablet} {
    margin: 0.25rem;
    padding: auto;
    width: 100%;
  }

  @media ${theme.mobile} {
    width: 100%;
  }
`;

const UserInfoEditButton = styled(Button)({
  'flex': '1 1 auto',
  'width': '10rem',
  'height': '3rem',

  '&&&': {
    'backgroundColor': '#ffffff',
    'color': '#F876DE',
    'borderRadius': '50px',
    'border': '1px solid #F876DE',

    '&:hover': {
      backgroundColor: '#F876DE',
      color: '#ffffff',
    },
  },
});

const SignOutButton = styled(Button)({
  'flex': '1 1 auto',
  'width': '10rem',
  'height': '3rem',
  '&&&': {
    'backgroundColor': 'red',
    'color': '#ffffff',
    'borderRadius': '50px',

    '&:hover': {
      backgroundColor: '#ffffff',
      color: 'red',
    },
  },
});

const Tab = styled.div`
  width: 67rem;
  height: 5rem;
  margin: auto;
  display: flex;
  justify-content: center;
  padding: 0 30px;

  @media ${theme.tablet} {
    width: 48rem;
    margin-top: 8.938rem;
    padding: 0 20px;
  }
  @media ${theme.mobile} {
    width: 23rem;
    padding: 0 5px;
  }
`;

const TabMenu = styled(Menu)({
  '&&&': {
    margin: '1rem',
    border: 'none',
    flex: '1 1 auto',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'Gmarket Sans TTF',
    cursor: 'pointer',
  },

  '&:hover': {
    background: '#f876de',
    color: '#ffffff',
  },
});

const PageButtonSection = styled.div`
  width: 100%;
  height: 5rem;
  margin-top: 2rem;
  text-align: center;
`;

const PageButton = styled(Button)({
  'font-family': 'Gmarket Sans TTF',

  '&&&': {
    'width': '3rem',
    'height': '1.3rem',
    'margin': '0.3rem',
    'padding': '10px',
    'lineHeight': '0px',
    'fontSize': '1rem',
    'color': '#494949',
    'borderRadius': '50px',

    '&&&:hover': {
      color: '#F876DE',
    },
  },
});

export {
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
};
