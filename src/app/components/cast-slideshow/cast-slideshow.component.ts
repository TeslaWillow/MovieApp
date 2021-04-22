import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { Cast } from '../../interfaces/credits-responce';

import Swiper from 'swiper';


@Component({
  selector: 'app-cast-slideshow',
  templateUrl: './cast-slideshow.component.html',
  styleUrls: ['./cast-slideshow.component.css']
})
export class CastSlideshowComponent implements OnInit, AfterViewInit {

  @Input('cast') cast:Cast[] = [];

  public swiper:Swiper;

  constructor() { }

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.swiper = new Swiper('.swiper-container', {
      loop: false,
      slidesPerView: 5,
      freeMode: true,
      spaceBetween: 15
    });
  }

}
