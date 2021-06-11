import { Component, OnInit } from '@angular/core';
import { Location } from "@angular/common";
import { FilmService } from 'src/app/service/film.service';
import { FilmResponse } from '../../interfaces/filmDetailResponse';

@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.component.html',
  styleUrls: ['./favoritos.component.css']
})
export class FavoritosComponent implements OnInit {

  listado: string[] = [];

  constructor(private service:FilmService, private location: Location) { }

  ngOnInit(): void {

    var fav = JSON.parse(localStorage.getItem("fav"));

    fav.forEach(element => {
      this.service.getPelicula(element).subscribe(
      (response) => {                
       this.listado.push(response.title);
      }
    )
    });
  }


}
