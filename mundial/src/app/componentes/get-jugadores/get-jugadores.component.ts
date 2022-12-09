import { Component, OnInit } from '@angular/core';
import { Jugadores } from 'src/app/clases/jugadores';
import { JugadoresServiceService } from 'src/app/servicios/jugadores-service.service';

@Component({
  selector: 'app-get-jugadores',
  templateUrl: './get-jugadores.component.html',
  styleUrls: ['./get-jugadores.component.css']
})
export class GetJugadoresComponent implements OnInit {

  jugadores?:Array<Jugadores>;

  constructor(private servicioJugadores:JugadoresServiceService){
    this.jugadores = [];
  }

  ngOnInit():void {
    this.servicioJugadores.getJugadores().subscribe({
      next: (ok:Array<Jugadores>)=>{
        this.jugadores = ok;
      },
      error: (error)=>{

      }
    })
  }

}
