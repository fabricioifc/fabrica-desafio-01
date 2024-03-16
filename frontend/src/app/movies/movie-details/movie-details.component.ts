import { Component } from '@angular/core';
import { Details } from '../model/Details';
import { MoviesService } from '../services/movies.service';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ActivatedRoute } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { Location } from '@angular/common';

@Component({
  selector: 'app-movie-details',
  standalone: true,
  imports: [
    CommonModule,
    MatToolbarModule,
    MatCardModule,
    CommonModule,
    MatButtonModule,
  ],
  templateUrl: './movie-details.component.html',
  styleUrl: './movie-details.component.scss'
})
export class MovieDetailsComponent {
  details: Details
  constructor(
    private moviesService: MoviesService,
    private route: ActivatedRoute,
    private location: Location,
    ){
    this.details = this.route.snapshot.data["details"]
  }

  onBack(){
    this.location.back()
  }
}
