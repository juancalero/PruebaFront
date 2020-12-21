import { Component, OnInit } from '@angular/core';
import {MoviesServiceService} from '../services/movies-service.service';
import {ActivatedRoute} from '@angular/router';
import {PeliculaResponse} from '../interfaces/pelicula-response';
import {Genre} from '../interfaces/cartelera-response';
import {Cast} from '../interfaces/creditos-response';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.css']
})
export class PeliculaComponent implements OnInit {
  // @ts-ignore
  pelicula: PeliculaResponse;
  generos: Genre[] = [];
  creditos: Cast[] = [];
  direccion: Cast[] = [];
  constructor(

    private activatedRoute: ActivatedRoute,
    private peliculaService: MoviesServiceService

  ) {

  }

  ngOnInit(): void {
    //obtenemos la ID de la ruta
    const {id} = this.activatedRoute.snapshot.params;

    this.peliculaService.getPelicula(id).subscribe( resp => {
      console.log(resp);
      this.pelicula = resp;
    });

    this.peliculaService.getGenero().subscribe(resp => {
      console.log(resp.genres);
      this.generos = resp.genres;
    });
    this.peliculaService.getCreditos(id).subscribe(resp => {
      console.log(resp);
      this.creditos = resp.cast;
      this.direccion = resp.crew;
    });
  }

}
