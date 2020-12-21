import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  title = 'peliculasVim';
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  buscarPelicula(texto: string) {
    texto = texto.trim();
    if (texto.length === 0 ){
      return;
    }
    this.router.navigate(['/buscar', texto]);
    console.log(texto);
  }

  verPelicula(id: number){
    this.router.navigate(['/pelicula']);
  }

}
