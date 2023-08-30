import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

import { MoviesComponent } from './components/movies/movies.component';
import { MoviesRoutingModule } from './movies-routing.module';


@NgModule({
  declarations: [
    MoviesComponent
  ],
  imports: [
    CommonModule,
    MoviesRoutingModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule
  ]
})
export class MoviesModule { }
