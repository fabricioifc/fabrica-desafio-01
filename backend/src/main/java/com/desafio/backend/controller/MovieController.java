package com.desafio.backend.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.desafio.backend.data.Details;
import com.desafio.backend.data.Movie;
import com.desafio.backend.data.Movies;
import com.desafio.backend.service.MovieService;


import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;


@RestController
@RequestMapping("/api/movies")
public class MovieController {
    private final MovieService movieService;

    public MovieController(MovieService movieService){
        this.movieService = movieService;
    }

    @GetMapping
    public Movies listMostPopularMovie() {
        return movieService.listMostPopularMovie();
    }

    @GetMapping("/{id}")
    public Details getDetailsOfMovie(@PathVariable Long id){
        return movieService.getDetailsOfMovie(id);
    }

    @PostMapping
    public Movies searchMovies(@RequestBody Movie movie){
        return movieService.searchMovies(movie.getTitle());
    }
    
}
