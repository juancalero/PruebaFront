import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FilmService } from 'src/app/service/film.service';
import { FilmResponse } from '../../interfaces/filmDetailResponse';
import { Location } from "@angular/common";
import { FirebaseService } from 'src/app/service/firebase.service';
import { FavoritoResponse, FavoritoData } from 'src/app/interfaces/favoritoResponse';

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
  fav: FavoritoResponse[] = [];
  existFav = false;

  constructor(private route: ActivatedRoute, private service:FilmService, private location: Location, private baseService: FirebaseService) { }

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
    this.cargarListaFav();

  }

  volver(){
    this.location.back()
  }

  cargarListaFav(){

    let list: FavoritoResponse[] = [];
    this.baseService.getFavoritos().subscribe(
      (response) => {  
        list = response.map((e) => {
          const d = e.payload.doc.data() as any;
          const favoritoData = {
            id: d.id
          } as FavoritoData;
          return {
            id: e.payload.doc.id,
            data: favoritoData
          } as FavoritoResponse;
        });
        this.fav = list;
        this.comprobarExistencia(this.id);
      }
    )
  }

  comprobarExistencia(id: number){
    let ok = false;
    this.fav.forEach(element => {
      if(element.data?.id == id){
        ok=true;
      }
    });
    this.existFav = ok;
  }

  

  anyadir(id: number){

    let favData: FavoritoData;

    favData = {
      id: id,
      anyo: this.peli.release_date,
      director: this.director,
      name: this.peli.title
    } as FavoritoData;
    this.baseService.newFavorito(favData);

    this.cargarListaFav();
    this.comprobarExistencia(this.id);

  }

  quitar(id: number){
    
    this.fav.forEach(element => {
      if(id == element.data?.id){
        this.baseService.deleteFavorito(element);
      }
    });

    this.cargarListaFav();
    this.comprobarExistencia(this.id);
  }

}
