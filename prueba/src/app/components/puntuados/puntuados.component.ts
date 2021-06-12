import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FilmService } from 'src/app/service/film.service';
import { Location } from "@angular/common";
import { FirebaseService } from 'src/app/service/firebase.service';
import { OpinionResponse, OpinionData } from 'src/app/interfaces/opinionResponse';

@Component({
  selector: 'app-puntuados',
  templateUrl: './puntuados.component.html',
  styleUrls: ['./puntuados.component.css']
})

export class PuntuadosComponent implements OnInit {

  list: OpinionResponse[] = [];

  constructor(private route: ActivatedRoute, private service:FilmService, private location: Location, private baseService: FirebaseService) { }

  ngOnInit(): void {
    this.baseService.getOpiniones().subscribe(
      (response) => {  
        this.list = response.map((e) => {
          const d = e.payload.doc.data() as any;
          const opinionData = {
            id: d.id,
            opinion: d.opinion,
            valor: d.valor,
            poster: d.poster,
            titulo: d.titulo
          } as OpinionData;
          return {
            id: e.payload.doc.id,
            data: opinionData
          } as OpinionResponse;
        });
        
      }
    )

  }

  eliminar(crit: OpinionResponse){
    debugger
    this.baseService.deleteOpinion(crit);
  }

  volver(){
    this.location.back()
  }

}
