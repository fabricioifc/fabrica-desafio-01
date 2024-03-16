import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';

const API_KEY = '11c939d7a53e7a63942587a5a50d1b9d';

function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    async function fetchMovieDetails() {
      try {
        const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=pt-BR`);
        setMovie(response.data);
      } catch (error) {
        console.error('Erro ao obter detalhes do filme:', error);
      }
    }

    fetchMovieDetails();
  }, [id]);

  function formatReleaseDate(releaseDate) {
    const [year, month, day] = releaseDate.split('-');
    return `${day}/${month}/${year}`;
  }

  if (!movie) {
    return <div>Carregando...</div>;
  }

  return (
    <div>
      <h2 className='text-light mb-6'>{movie.title}</h2>
      <div className="row">
        <div className="col-md-4">
          <img src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`} className="img-fluid" alt={movie.title} />
        </div>
        <div className="col-md-8">
          <p className='text-light'><strong>Popularidade:</strong> {movie.popularity}</p>
          <p className='text-light'><strong>Sinopse:</strong> {movie.overview}</p>
          <p className='text-light'><strong>Data de Lançamento:</strong> {formatReleaseDate(movie.release_date)}</p>
          <Link to="/" className="btn btn-primary">Voltar</Link>
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;
