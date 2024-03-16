import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../PopularMovies.css';

const API_URL = 'http://localhost:3001/api';

function PopularMovies() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    async function fetchPopularMovies() {
      try {
        const response = await axios.get(`${API_URL}/popular-movies`);
        setMovies(response.data);
      } catch (error) {
        console.error('Erro ao obter filmes populares:', error);
      }
    }

    fetchPopularMovies();
  }, []);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <div className="d-flex justify-content-between mt-4 row">
        <h2 className="text-light fs-4 text col-9">Filmes Populares</h2>
        <input
            type="text"
            placeholder="Pesquisar filmes por título"
            value={searchTerm}
            onChange={handleSearchChange}
            className="form-control col"
          />
      </div>
      <div className="row mt-4">
        {filteredMovies.map((movie) => (
          <div key={movie.id} className="col-md-3 mb-3 custom-hover">
            <div className="card border-0 h-100">
              <img
                src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
                className="card-img-top h-100"
                alt={movie.title}
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title ">{movie.title}</h5>
                <p className="card-text">Popularidade: {movie.popularity}</p>
                <Link
                  to={`/details/${movie.id}`}
                  className="btn btn-primary bg-success border-0 mt-auto custom-hover"
                >
                  Detalhes
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PopularMovies;
