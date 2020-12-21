import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {MoviesServiceService} from '../services/movies-service.service';
import {Genre, Movie} from '../interfaces/cartelera-response';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements OnInit {
  peliculasBuscadas: Movie[] = [];
  generos: Genre[] = [];
  page = 1;
  pageSize = 5;
  constructor(
    private activatedRoute: ActivatedRoute,
    private moviesService: MoviesServiceService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      //console.log(params.texto);
      this.moviesService.buscarPeliculas(params.texto).subscribe(resp => {
          console.log(resp.results);
          this.peliculasBuscadas = resp.results;
      });

      this.moviesService.getGenero().subscribe(resp => {
        console.log(resp.genres);
        this.generos = resp.genres;
      });

    })
  }

}
