import { TestBed } from '@angular/core/testing';

import { MovieStateSearchService } from './movie-state-search.service';

describe('MovieStateSearchService', () => {
  let service: MovieStateSearchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MovieStateSearchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
