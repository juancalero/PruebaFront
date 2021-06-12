import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FilmService } from 'src/app/service/film.service';
import { FilmResponse } from '../../interfaces/filmDetailResponse';
import { Location } from "@angular/common";
import { FirebaseService } from 'src/app/service/firebase.service';
import { FavoritoResponse, FavoritoData } from 'src/app/interfaces/favoritoResponse';
import { OpinionResponse, OpinionData } from 'src/app/interfaces/opinionResponse';
import { FormControl } from '@angular/forms';

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

  numSt :number = 0;
  textCrit :string = '';
  numStForm = new FormControl(this.numSt);
  textCritForm = new FormControl(this.textCrit);
  existCrit = false;
  crit: OpinionResponse = {} as any;

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
    this.obtenerCritica(this.id);
  }

  volver(){
    this.location.back()
  }

  comprobarExistenciaFav(id: number){
    let ok = false;
    this.fav.forEach(element => {
      if(element.data?.id == id){
        ok=true;
      }
    });
    this.existFav = ok;
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
        this.comprobarExistenciaFav(this.id);
      }
    )
  }
 

  anyadir(id: number){

    let favData: FavoritoData;

    favData = {
      id: id,
      anyo: this.peli.release_date,
      director: this.director,
      name: this.peli.title,
      poster: this.peli.poster_path
    } as FavoritoData;
    this.baseService.newFavorito(favData);

    this.cargarListaFav();

  }

  quitar(id: number){
    
    this.fav.forEach(element => {
      if(id == element.data?.id){
        this.baseService.deleteFavorito(element);
      }
    });

    this.cargarListaFav();
  }

  obtenerCritica(id: number){

    let crit: OpinionResponse = {} as any;
    let find = false;

    this.baseService.getOpiniones().subscribe(
      (response) => {
        response.map((e) => {
          
          const d = e.payload.doc.data() as any;
          if(d.id == id){
            find = true;
            const opinionData = {
              id: d.id,
              opinion: d.opinion,
              valor: d.valor,
              titulo: d.titulo,
              poster: d.poster
            } as OpinionData;
            crit = {
              id: e.payload.doc.id,
              data: opinionData
            } as OpinionResponse;
          }
          
        });

        this.crit = crit;
        this.existCrit = find;
        if(find){
          this.numStForm.setValue(crit.data.valor);
          this.textCritForm.setValue(crit.data.opinion);
        }
      }
    )
  }

  guardarCritica(){
    let opinionData = {
      id: this.id,
      opinion: this.textCritForm.value,
      valor: this.numStForm.value,
      poster: this.peli.poster_path,
      titulo: this.peli.title
    } as OpinionData;
    this.baseService.newOpinion(opinionData);
  }

  editarCritica(){
    this.crit.data.opinion =  this.textCritForm.value;
    this.crit.data.valor = this.numStForm.value;
    this.baseService.updateOpinion(this.crit);
  }

  eliminarCritica(){
    this.baseService.deleteOpinion(this.crit);
    window.location.reload();
  }

}
