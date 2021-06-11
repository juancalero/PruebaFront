import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BuscadorComponent } from './components/buscador/buscador.component';
import { DetalleComponent } from './components/detalle/detalle.component';
import { FavoritosComponent } from './components/favoritos/favoritos.component';
import { PuntuadosComponent } from './components/puntuados/puntuados.component';


const routes: Routes = [
  {path: '', component: BuscadorComponent},
  {path: 'pelicula/:id', component: DetalleComponent},
  {path: 'favoritos', component: FavoritosComponent},
  {path: 'valoraciones', component: PuntuadosComponent}
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
