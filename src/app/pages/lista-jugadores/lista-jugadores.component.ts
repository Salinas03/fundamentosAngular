import { Component, OnInit } from '@angular/core';
import { Jugador } from '../../Models/jugador';
import { JugadorService } from '../../services/jugador.service';

@Component({
  selector: 'app-lista-jugadores',
  templateUrl: './lista-jugadores.component.html',
  styleUrl: './lista-jugadores.component.css'
})
export class ListaJugadoresComponent implements OnInit{

  jugadores:Jugador[] = []

  constructor(private jugadorService:JugadorService){}

  ngOnInit(): void {
    this.jugadores = this.jugadorService.getJugadores()
  }

}
