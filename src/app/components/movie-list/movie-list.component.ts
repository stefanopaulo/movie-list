import { Component, OnInit } from '@angular/core';
import { TmdbService } from 'src/app/service/tmdb.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {
  movies: any[] = [];

  constructor(private tmdbService: TmdbService) { }

  ngOnInit(): void {
    this.tmdbService.getPopularMovies().subscribe(data => {
      this.movies = data.results.slice(0, 10);
    });
  }

}
