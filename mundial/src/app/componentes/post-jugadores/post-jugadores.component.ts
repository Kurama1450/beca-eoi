import { Component } from '@angular/core';
import { Jugadores } from 'src/app/clases/jugadores';
import { JugadoresServiceService } from 'src/app/servicios/jugadores-service.service';

@Component({
  selector: 'app-post-jugadores',
  templateUrl: './post-jugadores.component.html',
  styleUrls: ['./post-jugadores.component.css']
})
export class PostJugadoresComponent {

  name:string='';
  age:number=0;
  posicion:string='';

  constructor(private servicioJugadores:JugadoresServiceService){
    
  }

  addPlayer(){
    let player:Jugadores={
      name:this.name,
      age:this.age,
      posicion:this.posicion
    };

    this.servicioJugadores.postJugador(player).subscribe({
      next: (jugador:Jugadores)=>{
        console.log(jugador);
      },
      error: (error)=>{
        console.log(error);
      }
    });
  }
}
