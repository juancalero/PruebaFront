import { Component, OnInit, Input } from '@angular/core';
import { FilmSearch } from '../../interfaces/filmSearchResponse';
import { HttpClient } from '@angular/common/http';
import { FilmService } from 'src/app/service/film.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  @Input() listado: FilmSearch[] = [];
  @Input() title = '';
  @Input() max: number;

  private page = 1

  ant = true;
  sig = true;

  constructor(private service:FilmService) { }

  ngOnInit(): void {
    if(this.page == 1){
      this.ant = false;
    }
    if(this.max === this.page){
      this.sig = false;
    }else{
      this.sig = true;
    }
  }

  cargar(){
    this.service.getBusqueda(this.title, this.page).subscribe(
      (response) => {                
       this.listado = response.results;
       if(response.total_pages == this.page){
        this.sig = false;
       }
       if(this.page == 1){
        this.ant = false;
      }
      },
      (error) =>{
        this.sig = false;
      }
    )
  }

  siguiente(){
    this.page = this.page + 1;
    this.cargar();
    this.ant = true;
  }

  anterior(){
    this.page = this.page - 1;
    this.cargar();
  }

}
