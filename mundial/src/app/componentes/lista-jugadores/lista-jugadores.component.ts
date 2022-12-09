import { Component, OnInit } from '@angular/core';
import { Jugadores } from 'src/app/clases/jugadores';
import { JugadoresServiceService } from 'src/app/servicios/jugadores-service.service';


@Component({
  selector: 'app-lista-jugadores',
  templateUrl: './lista-jugadores.component.html',
  styleUrls: ['./lista-jugadores.component.css']
})
export class ListaJugadoresComponent implements OnInit{

  jugadores:Array<Jugadores>;

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

  postJugador(jugador:Jugadores){
    this.servicioJugadores.postJugador(jugador)
    .subscribe(jugador => this.jugadores?.push(jugador));
  }

  putJugador(jugador:Jugadores){
    this.servicioJugadores.putJugadores(jugador).subscribe();
  }
}
