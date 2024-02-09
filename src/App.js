import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNavbar from './components/MyNavbar';
import Home from './pages/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PageNotFound from './pages/PageNotFound';
import RegistrationForm from './components/RegistrationForm';
import LoginForm from './components/LoginForm';
import Movie from './components/Movie';
import FavoritesList from './pages/FavoritesList';
import { LanguageProvider } from './context/LanguageContext';
import MyMovies from './pages/MyMovies';

function App() {
  return (
    <>
      <BrowserRouter>
      <LanguageProvider>
        <MyNavbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<MyMovies />} />
          <Route path="/favorites" element={<FavoritesList />} />
          <Route path="/movies/:movieId" element={<Movie />} />
          <Route path="/register" element={<RegistrationForm />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        </LanguageProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
