import { Component, OnInit, Input } from '@angular/core';
import { FilmSearch } from '../../interfaces/filmSearchResponse';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  @Input() listado: FilmSearch[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
