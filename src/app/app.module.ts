import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { GenerosComponent } from './generos/generos.component';
import { HomeComponent } from './home/home.component';

import {HttpClientModule} from '@angular/common/http';
import { BuscarComponent } from './buscar/buscar.component';
import { CarteleraComponent } from './cartelera/cartelera.component';
import { PeliculaComponent } from './pelicula/pelicula.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {NgbPaginationModule, NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';
import { ValoracionComponent } from './valoracion/valoracion.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { FavoritasComponent } from './favoritas/favoritas.component';
import { TopComponent } from './top/top.component';
@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    GenerosComponent,
    HomeComponent,
    BuscarComponent,
    CarteleraComponent,
    PeliculaComponent,
    ValoracionComponent,
    FavoritasComponent,
    TopComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    NgbPaginationModule,
    NgbAlertModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
