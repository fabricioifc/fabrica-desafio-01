// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import PopularMovies from './components/PopularMovies';
import MovieDetails from './components/MovieDetails';

function App() {
  return (
    <Router>
      <div className="bg-dark">
        <nav className="navbar navbar-expand-lg navbar-light justify-content-center">
          <Link className="navbar-brand text-light fs-1 text fw-bold" to="/">Filmes - Desafio</Link>
        </nav>

        <div className="container mt-4">
          <Routes>
            <Route path="/" element={<PopularMovies />} />
            <Route path="/details/:id" element={<MovieDetails />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
