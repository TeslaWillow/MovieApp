import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MoviesService } from '../../services/movies.service';
import { MovieIDResponce } from '../../interfaces/movieId-responce';
import { Location } from '@angular/common';
import { Cast } from '../../interfaces/credits-responce';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  public movie:MovieIDResponce;
  public cast:Cast[] = [];

  constructor(
    private activatedRoute:ActivatedRoute,
    private lotation:Location,
    private router:Router,
    private _movie:MoviesService,
  ) { }

  ngOnInit(): void {
    // snapshot is used when in a page, there is no way to change de URL
    const { id } = this.activatedRoute.snapshot.params;
    this.getMovieData(id);
    this.getMovieCast(id);
  }

  getMovieData(id:string){
    this._movie.getMovieById(id).subscribe(
      (movie) => {
        if(!movie) { 
          this.router.navigateByUrl('/home');
          return;
        }
        this.movie = movie;
      }
    );
  }

  getMovieCast(id:string){
    this._movie.getMovieCast(id).subscribe(
      (cast) => { 
        //this.cast = cast;
        this.cast = cast.filter( actor => actor.profile_path !== null );
      }
    );
  }

  goBack(){
    this.lotation.back();
  }

}
