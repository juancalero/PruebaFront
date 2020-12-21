import { Component, OnInit } from '@angular/core';
import {MoviesServiceService} from '../services/movies-service.service';
import {Movie} from '../interfaces/cartelera-response';

@Component({
  selector: 'app-cartelera',
  templateUrl: './cartelera.component.html',
  styleUrls: ['./cartelera.component.css']
})
export class CarteleraComponent implements OnInit {
  peliculas: Movie[] = [] ;
  constructor(
    private peliculasService: MoviesServiceService
  ) {}


  ngOnInit(): void {
    this.peliculasService.getCartelera().subscribe(resp => {
      console.log(resp.results);
      this.peliculas = resp.results;
      return this.peliculas;
    });
  }

}
