import { ListMovies } from './../model/ListMovies';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, first, map, tap } from 'rxjs';
import { Movie } from '../model/Movie';
import { Details } from '../model/Details';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  private readonly API_MOVIES = "api/movies"

  constructor(private httpClient: HttpClient) { }

  listMostPopularMovies(){
    return this.httpClient.get<ListMovies>(this.API_MOVIES)
  }

  listMovieDetails(id: string){
    return this.httpClient.get<Details>(`${this.API_MOVIES}/${id}`)
  }

  searchMovies(value: object){
    return this.httpClient.post<ListMovies>(this.API_MOVIES, value);
  }
}
