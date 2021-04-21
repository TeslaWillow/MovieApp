import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { RatingModule } from 'ng-starrating';
// Components
import { NavbarComponent } from './navbar/navbar.component';
import { SlideshowComponent } from './slideshow/slideshow.component';
import { MoviesPosterGridComponent } from './movies-poster-grid/movies-poster-grid.component';

const COMPONENTS = [
  NavbarComponent,
  SlideshowComponent,
  MoviesPosterGridComponent
];

@NgModule({
  declarations: [
    COMPONENTS
  ],
  exports: [
    COMPONENTS
  ],
  imports: [
    CommonModule,
    RouterModule,
    RatingModule,
  ]
})
export class ComponentsModule { }
