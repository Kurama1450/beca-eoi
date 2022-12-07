import { Component, OnInit } from '@angular/core';
import { Jugadores } from 'src/app/clases/jugadores';
import {JUGADORES} from 'src/app/mocks/mockJuga';
import { JugadoresServiceService } from 'src/app/servicios/jugadores-service.service';


@Component({
  selector: 'app-lista-jugadores',
  templateUrl: './lista-jugadores.component.html',
  styleUrls: ['./lista-jugadores.component.css']
})
export class ListaJugadoresComponent implements OnInit{

  jugadores?:Array<Jugadores>;

  constructor(private servicioJugadores:JugadoresServiceService){
    this.jugadores = [];
  }

  ngOnInit(): void {
    this.servicioJugadores.getJugadores().subscribe({
      next: (ok:Array<Jugadores>)=>{
        this.jugadores = ok;
      },
      error: (error)=>{

      }
    })
      
  }

}
