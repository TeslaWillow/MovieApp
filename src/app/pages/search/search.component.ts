import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../../services/movies.service';
import { Movie } from '../../interfaces/nowPlaying-responce';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  public movies:Movie[] = [];
  public term:string = "";

  constructor(
    private activatedRoute:ActivatedRoute,
    private _movie:MoviesService,
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      (params) => {
        this.term = params.term;
        this.searchMovie(params.term);
      }
    );
  }

  searchMovie(term:string){
    this._movie.searchMovies(term).subscribe(
      (res) => {
        this.movies = res;
      }
    );
  };

}
