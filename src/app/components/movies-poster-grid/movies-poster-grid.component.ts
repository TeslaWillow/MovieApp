import { Component, HostListener, Input, OnInit } from '@angular/core';
import { Movie } from '../../interfaces/nowPlaying-responce';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-movies-poster-grid',
  templateUrl: './movies-poster-grid.component.html',
  styleUrls: ['./movies-poster-grid.component.css']
})
export class MoviesPosterGridComponent implements OnInit {

  @Input("movies") movies:Movie[] = [];
  @HostListener('window:scroll', ['$event']) 
  
  onScroll(){
     const pos = (document.documentElement.scrollTop || document.body.scrollTop);   
     const max = (document.documentElement.scrollHeight || document.body.scrollHeight);
     let dif = Math.abs(max - pos);
     if(dif < 1000){
       
       if(this._movies.cargando){ return; }

       this._movies.getNowPlaying().subscribe(
         (movies) => {
           this.movies.push(...movies);
         }
       );

     }
  }
  
  constructor(
    private _movies:MoviesService
  ) { }

  ngOnInit(): void {
    console.log(this.movies);
  }

}
