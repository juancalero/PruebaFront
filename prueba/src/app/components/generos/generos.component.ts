import { Component, OnInit, Input } from '@angular/core';
import { FilmService } from 'src/app/service/film.service';
import { GenerosResponse } from '../../interfaces/filmSearchResponse';
import { Genre } from '../../interfaces/filmSearchResponse';

@Component({
  selector: 'app-generos',
  templateUrl: './generos.component.html',
  styleUrls: ['./generos.component.css']
})
export class GenerosComponent implements OnInit {

  @Input() generos: number[] = [];
  private listaGeneros: Genre[] = [];
  tipo = '';

  constructor(private service:FilmService) { }

  ngOnInit(): void {
    this.service.getGeneros().subscribe(
      (response) => {                 
       this.listaGeneros = response.genres;
       this.cargar();
      }
    )
  }

  cargar(){
    this.generos.forEach(e1 => {
      this.listaGeneros.forEach(e2 => {
            if(e1 == e2.id){
              if(this.tipo == ''){
                this.tipo = `${e2.name}`;
              }else{
                this.tipo = `${this.tipo}, ${e2.name}`;
              }
            }
        });
    });
  }

}
