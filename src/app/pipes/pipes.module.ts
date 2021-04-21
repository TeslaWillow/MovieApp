import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PosterPipe } from './poster.pipe';

const PIPES = [
  PosterPipe
];

@NgModule({
  declarations: [
    PIPES
  ],
  exports: [
    PIPES
  ],
  imports: [
    CommonModule
  ]
})
export class PipesModule { }
