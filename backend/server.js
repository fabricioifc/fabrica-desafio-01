const express = require('express');
const axios = require('axios');
const app = express();
const cors = require('cors');
const PORT = process.env.PORT || 5000;
require('dotenv').config({ path: '../.env' });

app.use(express.json());
app.use(cors());

const apiKey = process.env.API_KEY;

app.get('/api/popular-movies', async (req, res) => {
    try {
        const response = await axios.get('https://api.themoviedb.org/3/movie/popular?language=pt-BR&page=1', {
            headers: {
                Authorization: `Bearer ${apiKey}`,
                Accept: 'application/json',
            }
        });
        res.json(response.data.results);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});