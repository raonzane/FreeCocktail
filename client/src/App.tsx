import React from 'react';
import { Routes, Route } from 'react-router-dom';
import GlobalStyle from 'styles/GlobalStyle';
import './App.style.ts';
import { HeaderContainer, FooterContainer } from 'App.style';
import Header from 'Components/Header';
import Footer from 'Components/Footer/Footer';
import RecipeListPage from 'Pages/RecipeListPage/RecipeListPage';
import Landing from './Pages/Landing/Landing';
import LoginPage from './Pages/LoginPage/LoginPage';
import SignUpPage from './Pages/SignUpPage/SignUpPage';
import MyPage from './Pages/MyPage/MyPage';

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
        <Route path="/recipeListPage" element={<RecipeListPage />} />
      </Routes>
      <FooterContainer>
        <Footer />
      </FooterContainer>
    </>
  );
}

export default App;
