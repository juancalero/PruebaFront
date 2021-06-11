import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { FilmSearchResponse } from '../interfaces/filmSearchResponse';
import { GenerosResponse } from '../interfaces/filmSearchResponse';


@Injectable({
  providedIn: 'root'
})
export class FilmService {

  private url = 'https://api.themoviedb.org/3';
  private key = 'e2caa9bd3cb58f5c2558dda699a6a724';
  page = 1;

  constructor(private http:HttpClient) { }

  getBusqueda(title: string, page: number):Observable<FilmSearchResponse>{
    return this.http.get<FilmSearchResponse>(`${this.url}/search/movie/?api_key=${this.key}&language=es-ES&query=${title}&page=${page}&include_adult=true`);
  }

  getGeneros():Observable<GenerosResponse>{
    return this.http.get<GenerosResponse>(`${this.url}//genre/movie/list?api_key=${this.key}&language=es-ES`);
  }

  continuar(){
    debugger
    this.page = this.page + 1;
  }


}
