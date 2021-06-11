import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FilmService } from 'src/app/service/film.service';
import { FormsModule } from '@angular/forms';
import { FilmSearch } from '../../interfaces/filmSearchResponse';
import { NgbCalendarGregorian } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {

  title = '';
  fail = false;
  load = false;
  listado: FilmSearch[] = [];

  constructor(private service:FilmService) { }

  ngOnInit(): void {
  }

  buscar(){
    
    this.service.getBusqueda(this.title).subscribe(
      (response) => {       
        debugger                 
       this.listado = response.results;
       this.cargar();
      },
      (error) => {
        debugger
        this.fallo();
      }
    )
  }

  cargar(){
    this.load = true;
    this.fail = false;
  }

  fallo(){
    this.load = false;
    this.fail = true;
  }



}
