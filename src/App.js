/* eslint-disable react/jsx-key */
import React from 'react';
import Header from './components/Header/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Celebrity from './pages/Celebrity';
import Tv from './pages/TV';
import Movies from './pages/Movies';
import MovieDetail from './pages/MovieDetail';
import Home from './pages/Home';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Celebrity" element={<Celebrity />} />
          <Route path="/TV" element={<Tv />} />
          <Route path="/movie" element={<Movies />} />
          <Route path="/movie/:title" element={<MovieDetail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
