import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FilmService } from 'src/app/service/film.service';
import { FilmResponse } from '../../interfaces/filmDetailResponse';
import { Location } from "@angular/common";

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {

  id: number;
  peli: FilmResponse;
  director = '';
  elenco: string[] = [];

  constructor(private route: ActivatedRoute, private service:FilmService, private location: Location) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      if (params.get('id') != null){
        this.id = parseInt(params.get('id'));
      }
    });

    this.service.getPelicula(this.id).subscribe(
      (response) => {                
       this.peli = response;
      }
    )

    this.service.getElenco(this.id).subscribe(
      (response) => {                
       debugger
        response.crew.forEach(element => {
         if(element.job == "Director"){
            this.director = element.name;
         }
       });

       response.cast.forEach(element => {
         if(element.known_for_department == 'Acting'){
          this.elenco.push(element.name);
         }
       });

      }
    )


  }

  volver(){
    this.location.back()
  }

}
