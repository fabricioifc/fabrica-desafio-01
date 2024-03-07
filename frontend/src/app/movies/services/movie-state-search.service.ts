import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ListMovies } from '../model/ListMovies';

@Injectable({
  providedIn: 'root'
})
export class MovieStateSearchService {
  private searchResults = new BehaviorSubject<ListMovies | null>(null);

  setSearchResults(results: ListMovies) {
    this.searchResults.next(results);
  }

  getSearchResults() {
    return this.searchResults.asObservable();
  }
  constructor() { }

}
