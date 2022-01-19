import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Landing from './Pages/Landing';
import LoginPage from './Pages/LoginPage';
import MyPage from './Pages/MyPage';
import RecipeList from './Pages/RecipeList';
import RecipeWrite from './Pages/RecipeWrite';
import SignUpPage from './Pages/SignUpPage';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/loginPage" element={<LoginPage />} />
        <Route path="/signupPage" element={<SignUpPage />} />
        <Route path="/myPage" element={<MyPage />} />
        <Route path="/recipeList" element={<RecipeList />} />
        <Route path="/recipeWrite" element={<RecipeWrite />} />
      </Routes>
    </div>
  );
}

export default App;
