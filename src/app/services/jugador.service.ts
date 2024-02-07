import { Injectable } from '@angular/core';
import { Jugador } from '../Models/jugador';
import { TipoJugador } from '../Models/tipo_jugador';

@Injectable({
  providedIn: 'root'
})
export class JugadorService {

  private jugadores:Jugador[]=[];
  private tipos:TipoJugador[]=[];

  constructor() { 

    this.jugadores = []

    this.tipos=[
      {
        id:0,
        descripcion:'Sin definir'
      },
      {
        id:1,
        descripcion:'0'
      },
      {
        id:2,
        descripcion:'1'
      },
      {
        id:3,
        descripcion:'2'
      },
      {
        id:4,
        descripcion:'7'
      },
      {
        id:5,
        descripcion:'10'
      },
      {
        id:6,
        descripcion:'14'
      },
      {
        id:7,
        descripcion:'20'
      },
    ];
  }

  getJugadores(){
    return this.jugadores;
  }

  getTipos(){
    return this.tipos;
  }

  agregarJugadores(jugador:Jugador){
    this.jugadores.push(jugador);
  }

  nuevoJugador():Jugador{
    return{
      id:this.jugadores.length+1,
      nombre:'',
      equipo:'',
      posision:'',
      numeroPlayera:0
    }
  }

}
