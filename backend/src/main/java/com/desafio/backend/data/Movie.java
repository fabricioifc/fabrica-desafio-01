package com.desafio.backend.data;

import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.Data;

@Data
public class Movie {
    private Long id;
    @JsonProperty("poster_path")
    private String posterPath;
    private String title;
    private Long popularity;
    // private String overview;
    // @JsonProperty("release_date")
    // private String releaseDate;
}
