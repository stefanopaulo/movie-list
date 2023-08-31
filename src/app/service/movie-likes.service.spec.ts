import { TestBed } from '@angular/core/testing';

import { MovieLikesService } from './movie-likes.service';

describe('MovieLikesService', () => {
  let service: MovieLikesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MovieLikesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
