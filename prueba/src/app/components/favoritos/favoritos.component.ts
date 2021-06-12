import { Component, OnInit } from '@angular/core';
import { Location } from "@angular/common";
import { FirebaseService } from 'src/app/service/firebase.service';
import { FavoritoResponse, FavoritoData } from 'src/app/interfaces/favoritoResponse';

@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.component.html',
  styleUrls: ['./favoritos.component.css']
})
export class FavoritosComponent implements OnInit {

  fav: FavoritoResponse[] = [];

  constructor(private baseService: FirebaseService, private location: Location) { }

  ngOnInit(): void {
    this.cargarListaFav();
  }

  cargarListaFav(){

    let list: FavoritoResponse[] = [];
    this.baseService.getFavoritos().subscribe(
      (response) => {  
        list = response.map((e) => {
          const d = e.payload.doc.data() as any;
          const favoritoData = {
            id: d.id,
            anyo: d.anyo,
            director: d.director,
            name: d.name
          } as FavoritoData;
          return {
            id: e.payload.doc.id,
            data: favoritoData
          } as FavoritoResponse;
        });
        this.fav = list;
      }
    )
  }

  volver(){
    this.location.back()
  }

  refrescar(){

  }

  quitar(id: number){
    
    this.fav.forEach(element => {
      if(id == element.data?.id){
        this.baseService.deleteFavorito(element);
      }
    });

    this.cargarListaFav();
  }


}
