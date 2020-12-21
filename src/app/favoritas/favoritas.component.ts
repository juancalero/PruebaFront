import { Component, OnInit } from '@angular/core';
import {MoviesServiceService} from '../services/movies-service.service';
import {Datos, ValoracionResponse} from '../interfaces/valoracion-response';

@Component({
  selector: 'app-favoritas',
  templateUrl: './favoritas.component.html',
  styleUrls: ['./favoritas.component.css']
})
export class FavoritasComponent implements OnInit {
  peliculasFavoritas: ValoracionResponse [] = [];
  peliculaskeys = [];
  peliculasFinales: ValoracionResponse [] = [];
  datosPeliculas = [];
  datosPeliculasFinales: ValoracionResponse[] = [];
  constructor() { }

  ngOnInit(): void {
   this.peliculasFinales = this.tratamientoPeliculas().filter(p => p.favorito===true);
   console.log(this.peliculasFinales);

  }




  // tratamiento de las peliculas
  tratamientoPeliculas(){
    let pelisKeys = [];
    pelisKeys = this.obtenerPeliculasLS();
    for(let pk = 0; pk < pelisKeys.length; pk++) {
      // @ts-ignore
      this.peliculasFavoritas.push(this.peliculasFavoritasLS(pelisKeys[pk]));
    }
    return this.peliculasFavoritas;
  }

  // recorreomos el localstorage para obtener los keys
  obtenerPeliculasLS(){
    for (let i = 0; i < localStorage.length; i++){
       // @ts-ignore
      this.peliculaskeys.push(localStorage.key(i));
    }
    return this.peliculaskeys;
  }
  // obtenemos las peliculas de localStorange
  peliculasFavoritasLS(id: string){
    console.log(localStorage.getItem(id));
    // @ts-ignore
    return JSON.parse(localStorage.getItem(id));
  }




}
