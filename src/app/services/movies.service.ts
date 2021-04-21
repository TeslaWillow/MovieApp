import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { NowPlayingResponce } from '../interfaces/NowPlaying-responce';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(
    private http:HttpClient
  ) { }

  // return most recent releases in theaters
  getNowPlaying():Observable<NowPlayingResponce> {
    return this.http.get<NowPlayingResponce>(`https://api.themoviedb.org/3/movie/now_playing?api_key=0690e69de635cb351395d97ee3d699cc&language=en-US&page=1`);
  }

}
