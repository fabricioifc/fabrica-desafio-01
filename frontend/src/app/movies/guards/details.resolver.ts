import { ResolveFn } from '@angular/router';
import { Observable } from 'rxjs';
import { Details } from '../model/Details';
import { MoviesService } from '../services/movies.service';
import { inject } from '@angular/core';

export const detailsResolver: ResolveFn<Observable<Details>> = (route, state, service: MoviesService = inject(MoviesService)) => {
  return service.listMovieDetails(route.params["id"])
};
