import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BuscadorComponent } from './components/buscador/buscador.component';
import { ListadoComponent } from './components/listado/listado.component';
import { DetalleComponent } from './components/detalle/detalle.component';
import { FavoritosComponent } from './components/favoritos/favoritos.component';
import { PuntuadosComponent } from './components/puntuados/puntuados.component';
import { FilmService } from './service/film.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { GenerosComponent } from './components/generos/generos.component';

@NgModule({
  declarations: [
    AppComponent,
    BuscadorComponent,
    ListadoComponent,
    DetalleComponent,
    FavoritosComponent,
    PuntuadosComponent,
    GenerosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    RouterModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [FilmService],
  bootstrap: [AppComponent]
})
export class AppModule { }
