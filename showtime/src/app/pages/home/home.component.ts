import { Component, OnInit , ViewEncapsulation, CUSTOM_ELEMENTS_SCHEMA, AfterViewInit, ElementRef, Renderer2  } from '@angular/core';
import { MovieApiService } from 'src/app/service/movie-api.service';
import { Title,Meta, BrowserModule } from '@angular/platform-browser';


import { ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';








@Component({
  selector: 'app-home',
  standalone:true,
  imports: [
    CommonModule,
    RouterLink,
    ReactiveFormsModule,
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  encapsulation: ViewEncapsulation.None,
})
export class HomeComponent implements OnInit {

  

  constructor(private service: MovieApiService,private title:Title,private meta:Meta) {
    this.title.setTitle('Home - showtime');
    this.meta.updateTag({name:'description',content:'watch online movies'});
   
    
   }
  

  bannerResult: any = [];
  trendingMovieResult: any = [];
  actionMovieResult: any = [];
  adventureMovieResult: any = [];
  animationMovieResult: any = [];
  comedyMovieResult: any = [];
  documentaryMovieResult: any = [];
  sciencefictionMovieResult: any = [];
  thrillerMovieResult: any = [];
  myScriptElement: HTMLScriptElement | undefined;
  currentPage:number = 1;
  currentPage2:number = 2;
  swiperEl:any = document.querySelector('swiper-container');


  
   ngOnInit(): void {
    
  this.bannerData();
  this.trendingData();
  this.actionMovie();
  this.adventureMovie();
  this.comedyMovie();
  this.animationMovie();
  this.documentaryMovie();
  this.sciencefictionMovie();
  this.thrillerMovie();
   
  }

  
  

  


  // bannerdata
  bannerData() {
    this.service.bannerApiData().subscribe((result: { results: any; }) => {
      console.log(result, 'bannerresult#');
      this.bannerResult = result.results;
    });
  }


  trendingData() {
    this.service.trendingMovieApiData(this.currentPage).subscribe((result: { page: number, results: any[]; }) => {
      console.log(result, 'trendingresult#');
      if (result.page === 1) {
        this.trendingMovieResult = result.results;
      } else {
        this.trendingMovieResult = [...this.trendingMovieResult, ...result.results];
      }
      this.currentPage++;
    });
  }
  

  
  

  // action 
  actionMovie() {
    this.service.fetchActionMovies().subscribe((result: { results: any; }) => {
      this.actionMovieResult = result.results;
    });
  }




  // adventure 
  adventureMovie() {
    this.service.fetchAdventureMovies().subscribe((result: { results: any; }) => {
      this.adventureMovieResult = result.results;
    });
  }


  // animation 
  animationMovie() {
    this.service.fetchAnimationMovies().subscribe((result: { results: any; }) => {
      this.animationMovieResult = result.results;
    });
  }


  // comedy 
  comedyMovie() {
    this.service.fetchComedyMovies().subscribe((result: { results: any; }) => {
      this.comedyMovieResult = result.results;
    });
  }

  // documentary 
  documentaryMovie() {
    this.service.fetchDocumentaryMovies().subscribe((result: { results: any; }) => {
      this.documentaryMovieResult = result.results;
    });
  }


  // science-fiction 
  sciencefictionMovie() {
    this.service.fetchScienceFictionMovies().subscribe((result: { results: any; }) => {
      this.sciencefictionMovieResult = result.results;
    });
  }

  // thriller
  thrillerMovie() {
    this.service.fetchThrillerMovies().subscribe((result: { results: any; }) => {
      this.thrillerMovieResult = result.results;
    });
  }

  getSlidesPerView() {
    const screenWidth = window.innerWidth;
    if (screenWidth >= 1200) {
      return 10; 
    } else if (screenWidth >= 992) {
      return 4; 
    } else if (screenWidth >= 768) {
      return 3; 
    } else {
      return 2; 
    }
  }
}