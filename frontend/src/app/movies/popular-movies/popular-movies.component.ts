import { MovieStateSearchService } from './../services/movie-state-search.service';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ActivatedRoute, Router } from '@angular/router';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { NgOptimizedImage } from '@angular/common';
import { Observable, of } from 'rxjs';

import { ListMovies } from '../model/ListMovies';
import { MoviesService } from './../services/movies.service';
import { Movie } from '../model/Movie';
import { SearchMovieComponent } from "../search-movie/search-movie/search-movie.component";

@Component({
    selector: 'app-popular-movies',
    standalone: true,
    templateUrl: './popular-movies.component.html',
    styleUrl: './popular-movies.component.scss',
    imports: [
        MatCardModule,
        CommonModule,
        MatButtonModule,
        MatToolbarModule,
        SearchMovieComponent,
        MatProgressSpinnerModule,
    ]
})
export class PopularMoviesComponent {
  movies?: Observable<ListMovies>
  constructor(
    private moviesService: MoviesService,
    private moviesStateService: MovieStateSearchService,
    private router: Router,
    private route: ActivatedRoute
    ){
    this.loadData()
  }

  loadData(){
    this.moviesStateService.getSearchResults().subscribe((results) => {
      this.movies = results ? of(results) : this.moviesService.listMostPopularMovies()
    })
  }

  getImageUrl(posterPath: string): string {
    return `https://image.tmdb.org/t/p/w780/${posterPath}`
  }

  onDetail(movie: Movie){
    this.router.navigate(["details", movie.id], { relativeTo: this.route })
  }

  onSearch(value: string){
    const movie = { title: value }
    this.moviesService.searchMovies(movie).subscribe((results) => {
      this.moviesStateService.setSearchResults(results)
    })
  }

  onPopularMovies(){
    this.moviesService.listMostPopularMovies().subscribe((results) => {
      this.moviesStateService.setSearchResults(results)
    })
  }

}
