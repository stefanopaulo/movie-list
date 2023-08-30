import { Component, OnInit } from '@angular/core';
import { TmdbService } from 'src/app/service/tmdb.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  movies: any[] = [];

  constructor(private tmdbService: TmdbService) { }

  ngOnInit(): void {
    this.tmdbService.getPopularMovies().subscribe(data => {
      this.movies = data.results.slice(0, 10);
    });
  }

}
