import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieLikesService {
  private baseUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  likeMovie(movieId: string): Observable<any> {
    const url = `${this.baseUrl}/movies/${movieId}/like`;
    return this.http.post(url, {});
  }
}
