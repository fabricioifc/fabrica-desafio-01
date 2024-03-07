const EXPRESS = require('express');
const APP = EXPRESS();
const fetch = require('node-fetch');
const apiKey = "f1d59387b79af1834383a55dacfb79c3";
const url = `https://api.themoviedb.org/3/trending/all/week?api_key=${apiKey}`;
//if change um must change in: \fabrica-desafio-01\client\myapp\package.json "proxy": "http://localhost:3729"
const IP = 'localhost';
const PORT = 3729;
const LOCAL = `http://${IP}:${PORT}`

APP.listen(PORT, IP, ()=>{
    //print out the HREF
    console.log(`Server running on: ${LOCAL}`)
})

APP.get("/api", async (req, res)=>{
    const data = await fetchMovies()
    res.json(data)
})

async function fetchMovies()
{
    try 
    {
        const res = await fetch(url)
        let data = await res.json()
        return await data;
    } catch (error) 
    {
        console.log('error on fetch', error)
        return null
    }
}
