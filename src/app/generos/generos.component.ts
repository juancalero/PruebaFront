import { Component, OnInit } from '@angular/core';
import {MoviesServiceService} from '../services/movies-service.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Genre} from '../interfaces/cartelera-response';

@Component({
  selector: 'app-generos',
  templateUrl: './generos.component.html',
  styleUrls: ['./generos.component.css'],
  providers: [MoviesServiceService],
})
export class GenerosComponent implements OnInit {
  generosPeliculas: Genre[] = [];
  constructor(
    private moviesService: MoviesServiceService
  ) {

  }

  ngOnInit(): void {
    this.moviesService.getGenero().subscribe(resp => {
      console.log(resp.genres);
      this.generosPeliculas = resp.genres;
    });
  }

}
