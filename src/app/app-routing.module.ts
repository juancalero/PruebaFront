import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Importamos componentes

import {AppComponent} from './app.component';
import {GenerosComponent} from './generos/generos.component';
import {HomeComponent} from './home/home.component';
import {CarteleraComponent} from './cartelera/cartelera.component';
import {BuscarComponent} from './buscar/buscar.component';
import {PeliculaComponent} from './pelicula/pelicula.component';
import {FavoritasComponent} from './favoritas/favoritas.component';
import {TopComponent} from './top/top.component';

const routes: Routes = [
  {path: '', component: CarteleraComponent},
  {path: 'generos', component: GenerosComponent},
  {path: 'cartelera', component: CarteleraComponent},
  {path: 'pelicula/:id', component: PeliculaComponent},
  {path: 'buscar/:texto', component: BuscarComponent},
  {path: 'favoritas', component: FavoritasComponent},
  {path: 'top', component: TopComponent},
  {path: '**', component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
