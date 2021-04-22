import { AfterViewInit, Component, Input, OnInit } from '@angular/core';

import Swiper from 'swiper';

import { Movie } from '../../interfaces/nowPlaying-responce';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.css']
})
export class SlideshowComponent implements OnInit, AfterViewInit {

  @Input("movies") movies:Movie[] = [];

  public swiper:Swiper;

  constructor() { }
  
  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.swiper = new Swiper('.swiper-container', {
      loop: true,
    });
    
  }

  onSlideNext(){
    this.swiper.slideNext();
  }

  onSlidePrev(){
    this.swiper.slidePrev();
  }
}
