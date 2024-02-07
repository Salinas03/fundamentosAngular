import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AltaJugadorComponent } from './pages/alta-jugador/alta-jugador.component';
import { ListaJugadoresComponent } from './pages/lista-jugadores/lista-jugadores.component';
import { FormsModule } from '@angular/forms';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { MenuComponent } from './pages/menu/menu.component';
import { HomeComponent } from './pages/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    AltaJugadorComponent,
    ListaJugadoresComponent,
    ContactoComponent,
    MenuComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
