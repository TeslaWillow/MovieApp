import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { Movie } from '../../interfaces/nowPlaying-responce';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public movies:Movie[] = [];
  public slideShow:Movie[] = [];

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

}
