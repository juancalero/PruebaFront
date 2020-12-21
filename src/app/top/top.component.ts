import { Component, OnInit } from '@angular/core';
import {ValoracionResponse} from '../interfaces/valoracion-response';

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.css']
})
export class TopComponent implements OnInit {
  peliculasFavoritas: ValoracionResponse [] = [];
  peliculaskeys = [];
  peliculasFinales: ValoracionResponse [] = [];
  datosPeliculas = [];
  datosPeliculasFinales: ValoracionResponse[] = [];

  constructor() { }

  ngOnInit(): void {
    // @ts-ignore
    this.peliculasFinales = this.tratamientoPeliculas().filter(p => p.valoracion >= 0).sort(function(a, b)
    { let puntosA = a.valoracion;
      let puntosB = b.valoracion;
      return (puntosB < puntosA) ? -1 : (puntosB > puntosA) ? 1 : 0;
    });
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
