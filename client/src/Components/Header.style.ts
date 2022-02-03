import styled from 'styled-components';
import { theme } from 'styles/theme';

export const HeaderItemContainer = styled.header`
  display: flex;
  justify-content: space-evenly;
  width: 78.75rem;
  padding: 0 30px;
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1vw 5vw;
  margin: 0.3rem;
  text-decoration: none;
  font-size: 1.3rem;
`;

export const LeftMenu = styled.ul`
  display: flex;
  > li {
    cursor: pointer;
    margin: 0.9rem 0.3rem;
    :hover {
      border: 0.063rem solid #333;
      border-radius: 50%;
      transition: box-shadow 0.2s ease-in-out,
        -webkit-box-shadow 0.2s ease-in-out;
    }
  }
`;

export const SearchBar = styled.li`
  display: flex;
  align-items: center;
  padding: 1vw 5vw;
  text-decoration: none;
  font-size: 1.1rem;
`;

export const AboutBtn = styled.li`
  display: flex;
  align-items: center;
  padding: 1vw 5vw;
  text-decoration: none;
  font-size: 1.1rem;
  @media ${theme.mobile} {
    display: none;
  }
  @media ${theme.tablet} {
    display: none;
  }
`;

export const RightMenu = styled.div`
  display: flex;
  > li {
    cursor: pointer;
    margin: 0.9rem 0.3rem;
    :hover {
      border: 0.063rem solid #333;
      border-radius: 50%;
      transition: box-shadow 0.2s ease-in-out,
        -webkit-box-shadow 0.2s ease-in-out;
    }
  }
  @media ${theme.mobile} {
    li {
      display: none;
    }
  }
  @media ${theme.tablet} {
    li {
      display: none;
    }
  }
`;

export const RecipeBtn = styled.li`
  display: flex;
  align-items: center;
  padding: 1vw 5vw;
  text-decoration: none;
  font-size: 1.1rem;
`;

export const LoginBtn = styled.li`
  display: flex;
  align-items: center;
  padding: 1vw 5vw;
  text-decoration: none;
  font-size: 1.1rem;
`;
