// backend/server.js
const express = require('express');
const axios = require('axios');
const app = express();
const cors = require('cors');
const PORT = process.env.PORT || 3001;

const API_KEY = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMWM5MzlkN2E1M2U3YTYzOTQyNTg3YTVhNTBkMWI5ZCIsInN1YiI6IjY1ZTY0ZjVmN2YxZDgzMDBjYTIyOGFjNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ikyGzyIrB45t7iqPPIZCqicYjJ3sNpDjbuEnI6GUf6w';

app.use(express.json());
app.use(cors());

app.get('/api/popular-movies', async (req, res) => {
  try {
    const response = await axios.get(`https://api.themoviedb.org/3/movie/popular?language=pt-BR&page=1`, {
      headers: {
        Authorization: `Bearer ${API_KEY}`,
        Accept: 'application/json',
      }
    });
    res.json(response.data.results);
  } catch (error) {
    console.error('Erro ao obter filmes populares:', error);
    res.status(500).json({ error: 'Erro ao obter filmes populares' });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor está rodando na porta ${PORT}`);
});