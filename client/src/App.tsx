import React from 'react';
import { Routes, Route } from 'react-router-dom';
import GlobalStyle from 'styles/GlobalStyle';
import './App.style.ts';
import { HeaderContainer } from 'App.style';
import Header from 'Components/Header';
import Landing from './Pages/Landing';
import LoginPage from './Pages/LoginPage/LoginPage';
import SignUpPage from './Pages/SignUpPage/SignUpPage';
import MyPage from './Pages/MyPage/MyPage';
import RecipeList from './Pages/RecipeList';
import RecipeWrite from './Pages/RecipeWrite';

function App() {
  return (
    <>
      <GlobalStyle />
      <HeaderContainer>
        <Header />
      </HeaderContainer>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/loginPage" element={<LoginPage />} />
        <Route path="/signupPage" element={<SignUpPage />} />
        <Route path="/myPage" element={<MyPage />} />
        <Route path="/recipeList" element={<RecipeList />} />
        <Route path="/recipeWrite" element={<RecipeWrite />} />
      </Routes>
    </>
  );
}

export default App;
