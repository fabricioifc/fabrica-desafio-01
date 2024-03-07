package com.desafio.backend.data;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.Data;

@Data
public class Details {
    private List<Genre> genres;
    @JsonProperty("original_language")
    private String originalLanguage;
    @JsonProperty("original_title")
    private String originalTitle;
    private String overview;
    @JsonProperty("release_date")
    private String releaseDate;
    private String status;
    @JsonProperty("vote_average")
    private float voteAverage;

}
