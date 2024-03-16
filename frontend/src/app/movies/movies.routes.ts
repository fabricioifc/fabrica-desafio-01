import { Routes } from "@angular/router";
import { PopularMoviesComponent } from "./popular-movies/popular-movies.component";
import { MovieDetailsComponent } from "./movie-details/movie-details.component";
import { detailsResolver } from "./guards/details.resolver";

export const MOVIES_ROUTES: Routes = [
  { path: "", component: PopularMoviesComponent },
  { path: "details/:id", component: MovieDetailsComponent, resolve: { details: detailsResolver } }
]
