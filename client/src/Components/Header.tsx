import React from 'react';
import { Icon } from 'semantic-ui-react';
import {
  HeaderItemContainer,
  LeftMenu,
  SearchBar,
  AboutBtn,
  Logo,
  RightMenu,
  RecipeBtn,
  LoginBtn,
} from './Header.style';

function Header() {
  return (
    <HeaderItemContainer>
      <LeftMenu>
        <SearchBar>
          <Icon color="black" name="search" />
        </SearchBar>
        <AboutBtn>About</AboutBtn>
      </LeftMenu>
      <Logo>로고로고</Logo>
      <RightMenu>
        <RecipeBtn>Recipe</RecipeBtn>
        <LoginBtn>Login</LoginBtn>
      </RightMenu>
    </HeaderItemContainer>
  );
}

export default Header;
