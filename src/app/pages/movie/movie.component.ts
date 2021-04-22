import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../../services/movies.service';
import { MovieIDResponce } from '../../interfaces/movieId-responce';
import { Location } from '@angular/common';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  public movie:MovieIDResponce;

  constructor(
    private activatedRoute:ActivatedRoute,
    private lotation:Location,
    private _movie:MoviesService,
  ) { }

  ngOnInit(): void {
    // snapshot is used when in a page, there is no way to change de URL
    const { id } = this.activatedRoute.snapshot.params;
    this._movie.getMovieById(id).subscribe(
      (res) => {
        console.log(res);
        this.movie = res;
      }
    );
  }

  goBack(){
    this.lotation.back();
  }

}
