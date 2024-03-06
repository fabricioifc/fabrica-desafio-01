const fetch = require('node-fetch');
const apiKey = "f1d59387b79af1834383a55dacfb79c3";
const url = `https://api.themoviedb.org/3/trending/all/week?api_key=${apiKey}`;

async function fetchMovies()
{
    try 
    {
        const res = await fetch(url)
        let data = await res.json()
        return data;
    } catch (error) 
    {
        console.log('error on fetch', error)
        return null;
    }
}
module.exports = fetchMovies()