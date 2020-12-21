import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, NgForm} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {Input} from '@angular/core';
import {ValoracionResponse} from '../interfaces/valoracion-response';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-valoracion',
  templateUrl: './valoracion.component.html',
  styleUrls: ['./valoracion.component.css']
})
export class ValoracionComponent implements OnInit {
  puntos = [ 0, 1, 2, 3, 4, 5, 6 , 7, 8, 9, 10];
  @Input() datosPeli = {};
  datosFormulario = {
    valoracion: [ 0, 1, 2, 3, 4, 5, 6 , 7, 8, 9, 10],
    comentario: '',
    favorito: false,
  };
  // @ts-ignore
  datosLeer: ValoracionResponse;
  datosGuardar = {};
  constructor(private activatedRoute: ActivatedRoute, private router: Router) {

  }
  ngOnInit(): void {
    console.log(this.leerDatos());
    // @ts-ignore
    this.datosLeer = this.leerDatos();
    console.log(this.datosLeer);
  }

  guardarDatos(forma: NgForm){
    console.log(forma.value);
    const {id} = this.activatedRoute.snapshot.params;
    this.datosGuardar = {
      valoracion: forma.value.valoracion,
      comentario: forma.value.comentario,
      favorito: forma.value.favorito,
      datos: this.datosPeli,

    };
    localStorage.setItem(id , JSON.stringify(this.datosGuardar));

    this.router.navigate(['/cartelera']);
  }

  leerDatos(){
    const {id} = this.activatedRoute.snapshot.params;
    // @ts-ignore
    return JSON.parse(localStorage.getItem(id.toString()));
  }




}
