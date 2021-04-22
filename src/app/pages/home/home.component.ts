import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { Movie } from '../../interfaces/nowPlaying-responce';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  public movies:Movie[] = [];
  public slideShow:Movie[] = [];

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
    this._movies.getNowPlaying().subscribe(
      (movies) => {
        this.movies = movies;
        this.slideShow = movies;
      },
      (err:any) => {
        console.log(err);
      }
    );
  }

  ngOnDestroy(): void {
    this._movies.resetPage();
  }

}
