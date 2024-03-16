import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import axios from 'axios';
import MovieDetail from './MovieDetail';

function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/popular-movies')
      .then(response => {
        setMovies(response.data);
      })
      .catch(error => {
        console.error('Erro ao obter filmes populares:', error);
      });
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<MovieList movies={movies} />} />
        <Route path="/movies/:id" element={<MovieDetail />} />
      </Routes>
    </Router>
  );
}

function MovieList({ movies }) {
  return (
    <body className="bg-dark">
    <div className="container py-4">
      <h1 className="display-4 text-center mb-5 text-light">Os Filmes Mais Populares Da Galaxy</h1>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 g-4">
        {movies.map(movie => (
          <div key={movie.id} className="col">
            <div className="card h-100 bg-secondary" style={{ backgroundColor: '#f8f9fa' }}>
              <img
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                alt={movie.title}
                className="card-img-top"
              />
              <div className="card-body bg-secondary">
                <h5 className="card-title text-light">{movie.title}</h5>
                <p className="card-text text-light">
                  Popularidade: {movie.popularity.toFixed(2)}
                </p>
                <Link
                  to={`/movies/${movie.id}`}
                  className="btn btn-danger btn-sm"                
                >
                  Ver Detalhes
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </body>
  

  );
}


export default App;