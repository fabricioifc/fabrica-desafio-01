const EXPRESS = require('express');
const APP = EXPRESS();
const TMDB = require('./tmdb')
//if change um must change in: \fabrica-desafio-01\client\myapp\package.json "proxy": "http://localhost:3729"
const IP = 'localhost';
const PORT = 3729;
const LOCAL = `http://${IP}:${PORT}`

APP.get("/api", (req, res)=>{
    let data = TMDB.fetchMovies()
    res.json( data )
})

APP.listen(PORT, IP, ()=>{
    //print out the HREF
    console.log(`Server running on: ${LOCAL}`)
  })