import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

// Interfaces
import { Movie, NowPlayingResponce } from '../interfaces/NowPlaying-responce';
import { SearchResponce } from '../interfaces/search-responce';
import { MovieIDResponce } from '../interfaces/movieId-responce';
import { MovieCastResponce, Cast } from '../interfaces/credits-responce';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  private baseURL:string = 'https://api.themoviedb.org/3';
  private releasePage = 1;
  public cargando:boolean = false;

  constructor(
    private http:HttpClient
  ) { }

  get params(){
    return {
      api_key: '0690e69de635cb351395d97ee3d699cc',
      language: 'en-US',
      page: this.releasePage.toString()
    };
  }

  resetPage(){
    this.releasePage = 1;
  }
  // return most recent releases in theaters
  getNowPlaying():Observable<Movie[]> {
    
    if(this.cargando){
      // return an empty array of MOVIE
      // that's why i use "of" rxjs operator
      return of([]);
    }

    this.cargando = true;
    return this.http.get<NowPlayingResponce>(`${this.baseURL}/movie/now_playing`, {
        params: this.params
      })
      .pipe(
        map((resp) =>  resp.results ),
        tap(() => {
          this.releasePage += 1;
          this.cargando = false;
        })
      );
  }

  // return movies that matches with a term of search
  searchMovies(term:string):Observable<Movie[]>{
    const params = { ...this.params, 
      page:'1', 
      query: term, 
      include_adult: 'false' 
    };

    return this.http.get<SearchResponce>(`${this.baseURL}/search/movie`, {
      params
    }).pipe(
      map((res) => res.results)
    );

  }

  // return a movie by ID
  getMovieById(id:string):Observable<MovieIDResponce>{
    return this.http.get<MovieIDResponce>(`${this.baseURL}/movie/${id}`, {
      params: this.params
    }).pipe(
      // This will happen when id is wrong
      catchError((err) => of(null))
    );
  }
  
  // return the cast of a movie by ID
  getMovieCast(id:string):Observable<Cast[]>{
    return this.http.get<MovieCastResponce>(`${this.baseURL}/movie/${id}/credits`,{
      params: this.params
    }).pipe(
      map((res) => res.cast),
      // This will happen when id is wrong
      catchError((err) => of([]))
    );
  }

}

