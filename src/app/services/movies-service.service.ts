import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import {CarteleraResponse, Movie} from '../interfaces/cartelera-response';
import {PeliculaResponse} from '../interfaces/pelicula-response';
import {CreditosResponse} from '../interfaces/creditos-response';
import {ValoracionResponse} from '../interfaces/valoracion-response';

@Injectable({
  providedIn: 'root'
})
export class MoviesServiceService {
  url = 'https://api.themoviedb.org/3/';
  key = '247345adc4fc5d4097df43d832934b07';
  idioma = '&language=es-ES';
  constructor(
    private http: HttpClient
  )
  {

  }

  // Obtenemos los géneros de las peliculas
  getGenero(): Observable<CarteleraResponse>{
    //this.url = `${this.api}genre/movie/list?${this.key}${this.idioma}`;
     return this.http.get<CarteleraResponse>(`${this.url}genre/movie/list?api_key=${this.key}${this.idioma}`);
  }
  // obtenemos la cartelera
  getCartelera(): Observable<CarteleraResponse> {
    return this.http.get<CarteleraResponse>(`${this.url}movie/now_playing?api_key=${this.key}${this.idioma}&page=1`);
  }
  //obtenemos las películas a buscar

  buscarPeliculas(texto: string): Observable<CarteleraResponse>{
    return this.http.get<CarteleraResponse>(`${this.url}search/movie?api_key=${this.key}${this.idioma}&query=${texto}&page=1&include_adult=false`);
  }

  //obtenemos la pelicula

  getPelicula(id: number): Observable<PeliculaResponse>{
    return this.http.get<PeliculaResponse>(` ${this.url}movie/${id}?api_key=${this.key}${this.idioma}`);
  }

  // Obtener los creditos
  getCreditos(id: number): Observable<CreditosResponse>{
    return this.http.get<CreditosResponse>(` ${this.url}movie/${id}/credits?api_key=${this.key}${this.idioma}`);
  }



}
