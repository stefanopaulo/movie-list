import { Component, OnInit } from '@angular/core';
import { MovieLikesService } from 'src/app/service/movie-likes.service';
import { TmdbService } from 'src/app/service/tmdb.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  movies: any[] = [];

  constructor(private tmdbService: TmdbService, private movieLikesService: MovieLikesService) { }

  ngOnInit(): void {
    this.tmdbService.getPopularMovies().subscribe(data => {
      this.movies = data.results.slice(0, 10);
    });
  }

  likeMovie(movieId: string) {
    this.movieLikesService.likeMovie(movieId).subscribe(
      (response) => {
        console.log(`Movie liked! New likes count: ${response.likes}`);
      },
      (error) => {
        console.error('An error occurred while liking the movie:', error);
      }
    );
  }

}
