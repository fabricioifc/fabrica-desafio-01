import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

function MovieDetail() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);  
  const API_KEY = '6a980745914168a88878ed1b675012a5';

  useEffect(() => {
    // Corrija a string da URL da API com interpolação correta
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
    <body className="bg-dark">
      <div className="container py-4 bg-secondary text-dark rounded-lg shadow">
  <div className="row">
    <div className="col-md-4 text-center">
      <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} className="img-fluid rounded" />
    </div>
    <div className="col-md-8">
      <h1 className="display-4 text-light mb-4">{movie.title}</h1>
      <p className="text-light">Popularidade: {movie.popularity}</p>
      <p className="text-light">Sinopse: {movie.overview}</p>
      <p className="text-light">Data de Lançamento: {movie.release_date}</p>
    </div>
  </div>
  <div className="mb-4 text-center">
    <Link to="/" className="btn btn-danger btn-lg">Voltar</Link>
  </div>
</div>
    </body>

  );
}

export default MovieDetail;