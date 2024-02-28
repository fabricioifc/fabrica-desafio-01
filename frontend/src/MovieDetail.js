import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
const API_KEY = 'ecb108a269ba1149622fd07fb5784a82';

function MovieDetail() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=pt-BR`)
      .then(response => {
        setMovie(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Erro ao obter detalhes do filme:', error);
        setError('Erro ao carregar detalhes do filme');
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <div className="container py-4">Carregando...</div>;
  }

  if (error) {
    return <div className="container py-4">Erro: {error}</div>;
  }

  if (!movie) {
    return <div className="container py-4">Filme não encontrado</div>;
  }

  return (
    <div className="container py-4">
      <div className="mb-4">
        <Link to="/" className="btn btn-secondary">Voltar</Link>
      </div>
      <div className="row">
        <div className="col-md-4">
          <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} className="img-fluid" />
        </div>
        <div className="col-md-8">
          <h1 className="display-4">{movie.title}</h1>
          <p className="lead">Popularidade: {movie.popularity}</p>
          <p className="text-muted">Sinopse: {movie.overview}</p>
          <p className="text-muted">Data de Lançamento: {movie.release_date}</p>
        </div>
      </div>
    </div>
  );
}

export default MovieDetail;
