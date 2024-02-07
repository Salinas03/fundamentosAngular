import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AltaJugadorComponent } from './pages/alta-jugador/alta-jugador.component';
import { ListaJugadoresComponent } from './pages/lista-jugadores/lista-jugadores.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [

  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'altaJugador',
    component: AltaJugadorComponent
  },
  {
    path: 'listaJugador',
    component: ListaJugadoresComponent
  },
  {
    path: 'contacto',
    component: ContactoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
