package com.desafio.backend.data;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.Data;

@Data
public class Movies {
    @JsonProperty("results")
    private List<Movie> movies;
}
