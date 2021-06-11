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
  fav: number[] = [];
  ok = false;

  constructor(private route: ActivatedRoute, private service:FilmService, private location: Location) { }

  ngOnInit(): void {

    this.fav = JSON.parse(localStorage.getItem("fav"));

    this.route.paramMap.subscribe(params => {
      if (params.get('id') != null){
        this.id = parseInt(params.get('id'));
      }
    });

    this.comprobar(this.id);

    this.service.getPelicula(this.id).subscribe(
      (response) => {                
       this.peli = response;
      }
    )

    this.service.getElenco(this.id).subscribe(
      (response) => {                
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

  comprobar(id: number){
    if(this.fav){
      var find = this.fav.indexOf(id);
      if(find != -1){
        this.ok = true;
      }
    }
  }

  volver(){
    this.location.back()
  }

  anyadir(id: number){
    if(this.fav){
      this.fav.push(id);
    }else{
      this.fav = [];
      this.fav.push(id);
    }
    localStorage.setItem("fav", JSON.stringify(this.fav));
    this.ok = true;
  }

  quitar(id: number){
    if(this.fav){
      var del = this.fav.indexOf(id);
      this.fav.splice(del, 1);
    }
    localStorage.setItem("fav", JSON.stringify(this.fav));
    this.ok = false;
  }

}
