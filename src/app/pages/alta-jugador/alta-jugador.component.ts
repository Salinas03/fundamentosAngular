import { Component, OnInit } from '@angular/core';
import { Jugador } from '../../Models/jugador';
import { TipoJugador } from '../../Models/tipo_jugador';
import { JugadorService } from '../../services/jugador.service';

@Component({
  selector: 'app-alta-jugador',
  templateUrl: './alta-jugador.component.html',
  styleUrl: './alta-jugador.component.css'
})
export class AltaJugadorComponent implements OnInit{

  jugador!:Jugador;
  tipos:TipoJugador[]=[]

  constructor (private jugadorService:JugadorService){}

  ngOnInit(): void{
    this.jugador = this.jugadorService.nuevoJugador();
    this.tipos = this.jugadorService.getTipos();
  }

  insertarJugador(){
    this.jugadorService.agregarJugadores(this.jugador);
    this.jugador = this.jugadorService.nuevoJugador();
  }


}
